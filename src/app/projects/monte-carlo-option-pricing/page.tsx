import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projects/monte-carlo-option-pricing" },
  title: "Monte Carlo Option Pricing | Preston Whiteman",
  description:
    "A tested Python risk engine for European option pricing, Monte Carlo Greeks, convergence analysis and antithetic variance reduction.",
};

const benchmarkParameters = [
  ["Spot price", "100"],
  ["Strike", "100"],
  ["Risk-free rate", "5%"],
  ["Volatility", "20%"],
  ["Maturity", "1 year"],
  ["Evaluation budget", "600,000"],
];

const results = [
  {
    option: "Call",
    standardError: "0.019017",
    antitheticError: "0.013460",
    errorReduction: "1.413×",
    varianceReduction: "1.996×",
  },
  {
    option: "Put",
    standardError: "0.011188",
    antitheticError: "0.008564",
    errorReduction: "1.306×",
    varianceReduction: "1.707×",
  },
];

const greekConvergence = [
  {
    greek: "Call Delta",
    pathsStart: "2,000",
    pathsEnd: "600,000",
    errorStart: "0.012819",
    errorEnd: "0.000744",
    reduction: "17.23×",
  },
  {
    greek: "Gamma",
    pathsStart: "2,000",
    pathsEnd: "600,000",
    errorStart: "0.002504",
    errorEnd: "0.000139",
    reduction: "18.01×",
  },
  {
    greek: "Call Vega",
    pathsStart: "2,000",
    pathsEnd: "600,000",
    errorStart: "1.600593",
    errorEnd: "0.097863",
    reduction: "16.36×",
  },
];

export default function MonteCarloOptionPricingPage() {
  return (
    <>




      <main tabIndex={-1} id="main-content">
        <section className="case-study-hero" aria-labelledby="case-study-title">
          <div className="case-study-index">
            <span>01 / Independent project</span>
            <span className="status status-active">Active</span>
          </div>
          <div className="case-study-title-block">
            <p className="kicker">Numerical methods · Python · 2026</p>
            <h1 id="case-study-title">Monte Carlo Option Pricing & Risk Engine.</h1>
            <p>
              A numerical-finance engine that prices European calls and puts,
              validates simulation against Black–Scholes and estimates price and Greek
              uncertainty. Reproducible studies test convergence, confidence intervals
              and antithetic variance reduction.
            </p>
            <div className="case-study-actions">
              <a
                className="button button-primary"
                href="https://github.com/pestopasta74/monte-carlo-risk-engine"
                target="_blank"
                rel="noreferrer"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#results">
                Examine results <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="case-brief" aria-label="Project at a glance"><div><strong>The question</strong><p>Can I measure and reduce simulation uncertainty at a fair evaluation budget?</p></div><div><strong>My approach</strong><p>Exact terminal GBM sampling, analytical benchmarks, independent pair averages and reproducible convergence studies.</p></div><div><strong>The recorded result</strong><p>1.996× call variance reduction at 600,000 evaluations. Model assumptions and sampling limits remain explicit.</p></div></section>
        <nav className="case-index" aria-label="Case study sections"><a href="#decisions">Modelling decisions</a><a href="#results">Recorded results</a><a href="#validation">Validation &amp; limits</a><Link href="/#option-lab">Try the model ↗</Link></nav>
        <section className="technical-notes" id="decisions"><div className="technical-heading"><p className="section-index">01 / Modelling decisions</p><h2>A price is only the start. <em>How do I know it’s useful?</em></h2><p>I started this project to connect my interest in theoretical physics with quantitative finance. The useful part was moving beyond a single plausible number: checking the model, measuring uncertainty and finding out what changes when the estimator changes.</p></div><div className="decision-list"><article><span>01 / THE MODEL</span><div><h3>Simulate the terminal price exactly.</h3><p>For a European option under geometric Brownian motion, only the expiry price determines the payoff. I use the exact terminal GBM solution, rather than time-stepping a whole path. This avoids time-discretisation error for this payoff and keeps the experiment focused on sampling uncertainty.</p><p className="math-line">S<sub>T</sub> = S<sub>0</sub> exp[(r − σ²/2)T + σ√T Z], &nbsp; Z ∼ N(0,1)</p><p>Discount the call or put payoff at the risk-free rate, average the observations, then report the sample standard error and an approximate 95% confidence interval.</p></div></article><article><span>02 / THE COMPARISON</span><div><h3>Spend the same budget on both estimators.</h3><p>Antithetic sampling pairs each Gaussian draw Z with −Z. A comparison of N ordinary draws against N pairs would give the antithetic method twice as many terminal-price evaluations. Instead, I compare N standard observations with N/2 pairs: equal work at the level of terminal-price evaluations.</p><p>The two payoffs inside each pair are correlated. I average them first and calculate uncertainty across the independent pair averages. Treating both halves as independent would give the wrong standard error.</p></div></article><article><span>03 / THE SENSITIVITIES</span><div><h3>Different Greeks need different estimators.</h3><p>Delta and Vega use pathwise derivatives of the exact GBM solution. Gamma uses a central finite difference, with the same Gaussian draws reused at the upward, central and downward spot prices. Common random numbers reduce the noise in the difference; the bump size still introduces a numerical trade-off.</p><p>The analytical implementation covers Delta, Gamma, Vega, Theta and Rho. Each is independently checked using central finite differences of the Black–Scholes pricing functions.</p></div></article></div></section>
        <section className="case-study-results" id="results" aria-labelledby="results-title">
          <div className="case-study-results-heading">
            <p className="section-index">02 / Recorded results</p>
            <h2 id="results-title">Lower variance at the same evaluation budget.</h2>
            <p>
              Standard and antithetic estimators use equal numbers of terminal-price
              evaluations. The antithetic estimator consistently produces the lower
              standard error while retaining the expected N⁻¹ᐟ² scaling.
            </p>
          </div>

          <div className="benchmark-grid" aria-label="Benchmark parameters">
            {benchmarkParameters.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="result-table-wrapper" tabIndex={0} role="region" aria-label="Scrollable numerical results">
            <table>
              <caption className="visually-hidden">
                Standard and antithetic Monte Carlo error comparison
              </caption>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Standard SE</th>
                  <th>Antithetic SE</th>
                  <th>SE reduction</th>
                  <th>Variance reduction</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.option}>
                    <th>{result.option}</th>
                    <td>{result.standardError}</td>
                    <td>{result.antitheticError}</td>
                    <td>{result.errorReduction}</td>
                    <td>{result.varianceReduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="case-study-figure">
            <Image
              src="/projects/monte-carlo/variance-reduction-convergence.png"
              alt="Call and put price estimates from standard and antithetic Monte Carlo converging towards Black-Scholes prices"
              width={2600}
              height={1000}
              priority
            />
            <figcaption>
              Standard and antithetic estimates converge towards the analytical call and
              put prices as the terminal-price evaluation budget increases.
            </figcaption>
          </figure>

          <figure className="case-study-figure">
            <Image
              src="/projects/monte-carlo/variance-reduction-standard-error.png"
              alt="Log-log comparison showing lower standard errors for antithetic call and put estimators"
              width={1800}
              height={1200}
            />
            <figcaption>
              Antithetic standard errors remain below their standard Monte Carlo
              counterparts across every tested budget.
            </figcaption>
          </figure>

          <div className="greeks-study" aria-labelledby="greeks-title">
            <p className="section-index">03 / Greek convergence</p>
            <div className="greeks-study-heading">
              <h2 id="greeks-title">Sensitivity estimates converge with measured uncertainty.</h2>
              <p>
                Across a 300-fold increase in path count, standard errors fall by roughly
                the expected square-root rate. At 600,000 paths, the analytical benchmark
                lies inside the reported 95% confidence interval for each studied Greek.
              </p>
            </div>
            <div className="result-table-wrapper" tabIndex={0} role="region" aria-label="Scrollable numerical results">
              <table>
                <caption className="visually-hidden">
                  Monte Carlo Greek standard-error convergence from 2,000 to 600,000 paths
                </caption>
                <thead>
                  <tr>
                    <th>Greek</th>
                    <th>Starting paths</th>
                    <th>Final paths</th>
                    <th>Starting SE</th>
                    <th>Final SE</th>
                    <th>SE reduction</th>
                  </tr>
                </thead>
                <tbody>
                  {greekConvergence.map((result) => (
                    <tr key={result.greek}>
                      <th>{result.greek}</th>
                      <td>{result.pathsStart}</td>
                      <td>{result.pathsEnd}</td>
                      <td>{result.errorStart}</td>
                      <td>{result.errorEnd}</td>
                      <td>{result.reduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="research-figures"><figure className="case-study-figure"><Image src="/projects/monte-carlo/greeks-convergence.png" alt="Recorded call and put Delta, Gamma and Vega estimates and confidence intervals converging towards analytical benchmarks" width={3000} height={1600} /><figcaption>Actual project output: call and put Greek estimates across the recorded simulation budgets, with 95% confidence intervals.</figcaption></figure><figure className="case-study-figure"><Image src="/projects/monte-carlo/greeks-standard-error.png" alt="Recorded Greek estimator standard errors compared with the theoretical inverse square root sample-size slope" width={3000} height={1000} /><figcaption>A 300-fold increase in sample count predicts a √300 ≈ 17.32-fold reduction in standard error. The measured reductions are close to that rate.</figcaption></figure></div><p className="greeks-note"><a href="/projects/monte-carlo/greeks-convergence.png" target="_blank" rel="noreferrer">Open the Greek convergence figure at full size ↗</a> · <a href="/projects/monte-carlo/greeks-standard-error.png" target="_blank" rel="noreferrer">Open the standard-error figure ↗</a></p><a className="data-download" href="/projects/monte-carlo/greeks-convergence.csv" download>Download the recorded Greek convergence data (.csv) ↓</a>
            <p className="greeks-note">
              The study exports its convergence data to CSV, making the numerical results
              inspectable and reproducible outside the plotting workflow.
            </p>
          </div>
        </section>

        <section className="case-study-engineering" aria-labelledby="engineering-title">
          <p className="section-index">04 / Engineering</p>
          <div>
            <h2 id="engineering-title">Designed as a reproducible numerical system.</h2>
            <ul>
              <li>Black–Scholes calls, puts and five analytical Greeks</li>
              <li>Standard and antithetic Monte Carlo estimators</li>
              <li>Pathwise Delta and Vega with common-random-number Gamma</li>
              <li>Monte Carlo Greek standard errors and 95% confidence intervals</li>
              <li>Finite-difference validation of every Greek</li>
              <li>Price and Greek convergence analysis with CSV export</li>
              <li>Automated Ruff, pytest and Python 3.13 CI checks</li>
              <li>Versioned releases and reproducible analysis scripts</li>
            </ul>
          </div>
        </section>

        <section className="technical-notes validation-notes" id="validation"><div className="technical-heading"><p className="section-index">05 / Validation &amp; limits</p><h2>Validation, before <em>interpretation.</em></h2></div><div className="validation-grid"><article><h3>Analytical consistency</h3><p>Known Black–Scholes prices, independently finite-differenced Greeks and put–call parity provide checks that do not rely on one simulation looking plausible.</p></article><article><h3>Statistical consistency</h3><p>Price and Greek estimates include standard errors and confidence intervals. Convergence studies test the expected N⁻¹ᐟ² error rate, and antithetic comparisons use equal evaluation budgets.</p></article><article><h3>Engineering consistency</h3><p>Separate model, pricing and comparison modules; immutable parameter objects; fixed seeds for reproducible studies; pytest and Ruff checks through GitHub Actions. Recorded CSV output lets someone inspect the experiment beyond a screenshot.</p></article></div><div className="limits-note"><h3>What these results do—and don’t—establish</h3><p>This is a numerical-methods project for European options under constant-volatility GBM. Agreement with Black–Scholes validates the implementation within those assumptions; it does not validate GBM against market data. The confidence intervals describe sampling uncertainty, not model risk or Gamma’s finite-difference bias.</p><p>A 95% interval can miss the analytical answer in an individual run. In the recorded experiment, call Vega at 2,000 paths does so. At 600,000 paths, all six studied call/put Greek benchmarks are inside their reported intervals. Increasing the sample count reduces typical sampling error; the realised pricing error need not improve at every step.</p><p>Value at Risk, Expected Shortfall, historical backtesting and additional stochastic models are future directions, rather than capabilities claimed by this version.</p></div><div className="reproduce-note"><h3>Follow the evidence</h3><p><a href="https://github.com/pestopasta74/monte-carlo-risk-engine/blob/main/src/quantmc/pricing/monte_carlo_greeks.py" target="_blank" rel="noreferrer">Read the Greek estimators ↗</a> · <a href="https://github.com/pestopasta74/monte-carlo-risk-engine/tree/main/tests" target="_blank" rel="noreferrer">Inspect the tests ↗</a> · <a href="https://github.com/pestopasta74/monte-carlo-risk-engine/blob/main/examples/greeks_convergence_analysis.py" target="_blank" rel="noreferrer">Reproduce the convergence study ↗</a></p></div></section>
        <section className="case-study-next" aria-labelledby="next-title">
          <p className="section-index">06 / Explore</p>
          <div>
            <h2 id="next-title">From research engine to interactive proof of concept.</h2>
            <p>
              A browser demonstration on the homepage lets you change volatility and sample
              count, switch between calls and puts, and compare simulated prices and
              confidence intervals with Black–Scholes. The Python repository contains
              the full Greek estimators and variance-reduction analysis.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/pestopasta74/monte-carlo-risk-engine"
              target="_blank"
              rel="noreferrer"
            >
              Explore the repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>


    </>
  );
}
