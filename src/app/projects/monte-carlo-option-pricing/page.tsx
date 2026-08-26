import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { benchmarkParameters, results } from "@/data/monte-carlo";

export const metadata: Metadata = {
  title: "Monte Carlo Option Pricing | Preston Whiteman",
  description:
    "A tested Python engine for European option pricing, Black-Scholes validation, analytical Greeks and antithetic variance reduction.",
};

export default function MonteCarloOptionPricingPage() {
  return (
    <>
      <a className="skip-link" href="#case-study-content">
        Skip to content
      </a>

      <header className="case-study-header">
        <Link className="wordmark" href="/" aria-label="Preston Whiteman, home">
          PW<span className="wordmark-dot">.</span>
        </Link>
        <Link className="case-study-back" href="/#work">
          ← Selected work
        </Link>
      </header>

      <main id="case-study-content">
        <section className="case-study-hero" aria-labelledby="case-study-title">
          <div className="case-study-index">
            <span>02 / Quantitative finance</span>
            <span className="status status-in-development">In development</span>
          </div>
          <div className="case-study-title-block">
            <p className="kicker">Numerical methods · Python · 2026</p>
            <h1 id="case-study-title">Monte Carlo option pricing, made testable.</h1>
            <p>
              A numerical-finance engine that prices European calls and puts,
              validates simulation against Black–Scholes, calculates analytical
              sensitivities and measures the effect of antithetic variance reduction.
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
            <div className="case-study-signal" aria-label="Project summary">
              <div><strong>2×</strong><span>variance reduction</span></div>
              <div><strong>600k</strong><span>evaluations compared</span></div>
              <div><strong>95%</strong><span>confidence intervals</span></div>
            </div>
          </div>
        </section>

        <section className="case-study-summary" aria-labelledby="problem-title">
          <p className="section-index">01 / The question</p>
          <div>
            <h2 id="problem-title">
              How closely does simulation recover an analytical price—and how much
              uncertainty can a simple variance-reduction method remove?
            </h2>
            <div className="case-study-prose">
              <p>
                The project begins with risk-neutral geometric Brownian motion and the
                closed-form Black–Scholes solution. Those analytical prices provide a
                benchmark for standard and antithetic Monte Carlo estimators.
              </p>
              <p>
                Rather than reporting a single simulated price, the engine exposes
                standard errors and 95% confidence intervals. Tests cover analytical
                benchmarks, put–call parity, finite-difference Greek validation and the
                statistical treatment of independent antithetic pair averages.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-method" aria-labelledby="method-title">
          <div className="case-study-method-heading">
            <p className="section-index">02 / Method</p>
            <h2 id="method-title">One model. Three views of the price.</h2>
          </div>
          <div className="method-grid">
            <article>
              <span>01</span>
              <h3>Analytical benchmark</h3>
              <p>Black–Scholes call and put prices establish the deterministic reference.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Standard simulation</h3>
              <p>Exact terminal GBM samples produce discounted payoff observations.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Antithetic estimator</h3>
              <p>Each normal draw is paired with its negative before payoffs are averaged.</p>
            </article>
          </div>
        </section>

        <section className="case-study-results" id="results" aria-labelledby="results-title">
          <div className="case-study-results-heading">
            <p className="section-index">03 / Results</p>
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

          <div className="result-table-wrapper">
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
        </section>

        <section className="case-study-engineering" aria-labelledby="engineering-title">
          <p className="section-index">04 / Engineering</p>
          <div>
            <h2 id="engineering-title">Designed as a reproducible numerical system.</h2>
            <ul>
              <li>Black–Scholes calls, puts and analytical Greeks</li>
              <li>Standard and antithetic Monte Carlo estimators</li>
              <li>Confidence intervals and equal-budget comparisons</li>
              <li>Finite-difference validation of every Greek</li>
              <li>Automated linting, tests and continuous integration</li>
              <li>Signed version tags and reproducible analysis scripts</li>
            </ul>
          </div>
        </section>

        <section className="case-study-next" aria-labelledby="next-title">
          <p className="section-index">05 / Next</p>
          <div>
            <h2 id="next-title">From research engine to interactive proof of concept.</h2>
            <p>
              The next version will expose the analysis through this website, allowing a
              visitor to change option parameters and compare prices, confidence intervals
              and Greeks without installing the Python package.
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

      <footer>
        <Link className="wordmark" href="/">
          PW<span className="wordmark-dot">.</span>
        </Link>
        <p>Monte Carlo option pricing · 2026</p>
        <Link href="/#work">Selected work ↑</Link>
      </footer>
    </>
  );
}
