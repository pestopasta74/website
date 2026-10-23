"use client";

import { useMemo, useState } from "react";

function normalCDF(x: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const density = Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  const tail = density * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return x >= 0 ? 1 - tail : tail;
}

function seededGenerator() {
  let seed = 104729;
  return () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
}

export default function OptionLab() {
  const [volatility, setVolatility] = useState(20);
  const [paths, setPaths] = useState(5000);
  const [kind, setKind] = useState<"call" | "put">("call");
  const result = useMemo(() => {
    const uniform = seededGenerator();
    const normal = () => Math.sqrt(-2 * Math.log(Math.max(uniform(), 1e-12))) * Math.cos(2 * Math.PI * uniform());
    const sigma = volatility / 100;
    const discount = Math.exp(-0.05);
    const payoffs: number[] = [];
    for (let i = 0; i < paths; i++) {
      const terminal = 100 * Math.exp((0.05 - sigma * sigma / 2) + sigma * normal());
      payoffs.push(discount * Math.max(kind === "call" ? terminal - 100 : 100 - terminal, 0));
    }
    const mean = payoffs.reduce((a, b) => a + b, 0) / paths;
    const variance = payoffs.reduce((a, b) => a + (b - mean) ** 2, 0) / (paths - 1);
    const se = Math.sqrt(variance / paths);
    const paired: number[] = [];
    for (let i = 0; i < paths / 2; i++) {
      const z = normal();
      const up = 100 * Math.exp(0.05 - sigma * sigma / 2 + sigma * z);
      const down = 100 * Math.exp(0.05 - sigma * sigma / 2 - sigma * z);
      const payoff = (price: number) => Math.max(kind === "call" ? price - 100 : 100 - price, 0);
      paired.push(discount * (payoff(up) + payoff(down)) / 2);
    }
    const antithetic = paired.reduce((a, b) => a + b, 0) / paired.length;
    const pairedVariance = paired.reduce((a, b) => a + (b - antithetic) ** 2, 0) / (paired.length - 1);
    const antitheticSE = Math.sqrt(pairedVariance / paired.length);
    const reduction = se ** 2 / antitheticSE ** 2;
    const d1 = (0.05 + sigma * sigma / 2) / sigma;
    const d2 = d1 - sigma;
    const benchmark = kind === "call" ? 100 * normalCDF(d1) - 100 * discount * normalCDF(d2) : 100 * discount * normalCDF(-d2) - 100 * normalCDF(-d1);
    const curves = Array.from({ length: 12 }, () => {
      let price = 100;
      const points = [[0, 150]];
      for (let step = 1; step <= 40; step++) {
        price *= Math.exp((0.05 - sigma * sigma / 2) / 40 + sigma / Math.sqrt(40) * normal());
        points.push([step * 15, 150 - (price - 100) * 1.6]);
      }
      return points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    });
    return { mean, se, benchmark, curves, antithetic, antitheticSE, reduction };
  }, [paths, volatility, kind]);

  return <div className="option-lab">
    <div className="lab-controls">
      <div className="lab-tabs" aria-label="Option type">{(["call", "put"] as const).map(type => <button key={type} aria-pressed={kind === type} onClick={() => setKind(type)}>{type === "call" ? "Call option" : "Put option"}</button>)}</div>
      <label htmlFor="volatility">Volatility <output>{volatility}%</output></label>
      <input id="volatility" aria-valuetext={`${volatility} percent volatility`} type="range" min="10" max="60" step="5" value={volatility} onChange={e => setVolatility(Number(e.target.value))} />
      <label htmlFor="paths">Simulation budget <output>{paths.toLocaleString("en-GB")}</output></label>
      <input id="paths" aria-valuetext={`${paths.toLocaleString("en-GB")} terminal-price evaluations per estimator`} type="range" min="1000" max="20000" step="1000" value={paths} onChange={e => setPaths(Number(e.target.value))} />
      <p>Spot = strike = 100<br />Maturity 1 year · risk-free rate 5%</p>
    </div>
    <div className="lab-display">
      <div className="lab-chart-label"><span>12 illustrative price paths</span><span>t = 0 → 1 year</span></div>
      <svg viewBox="0 0 600 300" role="img" aria-label={`Twelve simulated asset-price paths at ${volatility}% volatility`}>
        <defs><clipPath id="plot-clip"><rect width="600" height="300" /></clipPath></defs>
        {[50, 100, 150, 200, 250].map(y => <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="currentColor" opacity=".1" />)}
        <line x1="0" x2="600" y1="150" y2="150" stroke="currentColor" opacity=".3" strokeDasharray="4 5" />
        <g clipPath="url(#plot-clip)">{result.curves.map((d, i) => <path key={i} d={d} fill="none" stroke={i % 3 === 0 ? "#d56b43" : "#276556"} strokeWidth={i === 0 ? 2 : 1.1} opacity={i === 0 ? 1 : .5} />)}</g>
      </svg>
      <div className="lab-results" aria-live="polite"><div><span>Monte Carlo estimate</span><strong>{result.mean.toFixed(2)}</strong></div><div><span>Black–Scholes</span><strong>{result.benchmark.toFixed(2)}</strong></div><div><span>95% confidence interval</span><strong>{Math.max(0, result.mean - 1.96 * result.se).toFixed(2)}–{(result.mean + 1.96 * result.se).toFixed(2)}</strong></div></div>
      <div className="lab-comparison" aria-live="polite"><p className="comparison-title">Same budget. Two estimators.</p><div className="lab-comparison-row"><span>Method</span><span>Price</span><span>Std. error</span></div><div className="lab-comparison-row"><strong>Standard · {paths.toLocaleString("en-GB")} draws</strong><span>{result.mean.toFixed(3)}</span><span>{result.se.toFixed(4)}</span></div><div className="lab-comparison-row"><strong>Antithetic · {(paths / 2).toLocaleString("en-GB")} pairs</strong><span>{result.antithetic.toFixed(3)}</span><span>{result.antitheticSE.toFixed(4)}</span></div><p className="comparison-explanation">Observed variance-reduction factor: <strong>{result.reduction.toFixed(2)}×</strong>. Antithetic uncertainty is calculated across independent pair averages, not individual correlated payoffs.</p></div>
      <p className="lab-note">Fixed seed, European payoff, constant-volatility GBM. Each estimator uses the same total number of terminal-price evaluations. More samples reduce typical uncertainty; a single realised error need not improve monotonically. The Python project contains the full validation.</p>
    </div>
  </div>;
}
