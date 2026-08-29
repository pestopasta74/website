import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { benchmarkParameters, greekConvergence, results } from "@/data/monte-carlo";

export const metadata: Metadata = {
  title: "Monte Carlo Option Pricing",
  description:
    "A tested Python risk engine for European option pricing, Monte Carlo Greeks, convergence analysis and antithetic variance reduction.",
  openGraph: {
    title: "Monte Carlo Option Pricing | Preston Whiteman",
    description:
      "A tested Python risk engine for European option pricing, Monte Carlo Greeks, convergence analysis and antithetic variance reduction.",
    images: ["https://pestopasta74.com/projects/monte-carlo/canary-wharf.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monte Carlo Option Pricing | Preston Whiteman",
    description:
      "A tested Python risk engine for European option pricing, Monte Carlo Greeks, convergence analysis and antithetic variance reduction.",
    images: ["https://pestopasta74.com/projects/monte-carlo/canary-wharf.jpg"],
  },
  alternates: { canonical: "/projects/monte-carlo-option-pricing" },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Monte Carlo Option Pricing and Risk Engine",
  description:
    "A Python engine for European option pricing, Monte Carlo Greeks, uncertainty estimation and convergence analysis.",
  codeRepository: "https://github.com/pestopasta74/monte-carlo-risk-engine",
  programmingLanguage: "Python",
  author: {
    "@type": "Person",
    name: "Preston Whiteman",
    url: "https://pestopasta74.com",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <section className="case-study-hero" aria-labelledby="case-study-title">
          <div className="case-study-index">
            <span>02 / Quantitative finance</span>
            <span className="status status-active">Active</span>
          </div>
          <div className="case-study-title-block">
            <p className="kicker">Numerical methods · Python · 2026</p>
            <h1 id="case-study-title">Monte Carlo risk, made measurable.</h1>
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
            <div className="case-study-signal" aria-label="Project summary">
              <div><strong>2×</strong><span>less noisy call estimates</span></div>
              <div><strong>600k</strong><span>simulated market outcomes</span></div>
              <div><strong>95%</strong><span>uncertainty ranges reported</span></div>
            </div>
          </div>
        </section>

        <section className="plain-english" aria-labelledby="plain-english-title" data-reveal>
          <p className="section-index">In plain English</p>
          <div>
            <h2 id="plain-english-title">What does this engine actually do?</h2>
            <p className="plain-english-intro">
              An option is a contract whose value depends on what an asset might be worth
              in the future. Because that future price is uncertain, the engine simulates
              thousands of plausible market outcomes, calculates the contract&apos;s payoff in
              each one and averages the results into an estimated fair value.
            </p>
            <div className="explainer-grid">
              <article>
                <span>01</span>
                <h3>Monte Carlo simulation</h3>
                <p>
                  A way to study uncertainty by running the same model many times with
                  different random market movements—like repeating an experiment under
                  thousands of plausible futures.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Black–Scholes benchmark</h3>
                <p>
                  A recognised analytical pricing formula. Comparing the simulation with
                  this known answer checks that the engine is producing credible results.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Greeks</h3>
                <p>
                  Risk measures that show how an option&apos;s value responds when the market
                  changes—for example, when the asset price or expected volatility moves.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-study-summary" aria-labelledby="problem-title" data-reveal>
          <p className="section-index">01 / The question</p>
          <div>
            <h2 id="problem-title">
              How closely can simulation recover analytical prices and sensitivities,
              and how honestly can it report the remaining uncertainty?
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
              <p>
                The latest study extends that validation to pathwise Delta and Vega and
                a common-random-number Gamma estimator, tracking all three from 2,000 to
                600,000 simulated paths.
              </p>
              <p>
                In practical terms, this tests more than whether the code returns a
                number. It checks whether that number is accurate, whether its uncertainty
                is measured honestly and whether the method becomes more reliable as more
                computation is used.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study-method" aria-labelledby="method-title" data-reveal>
          <div className="case-study-method-heading">
            <p className="section-index">02 / Method</p>
            <h2 id="method-title">One model. Prices, sensitivities and uncertainty.</h2>
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
            <article>
              <span>04</span>
              <h3>Monte Carlo Greeks</h3>
              <p>Pathwise and common-random-number estimators measure Delta, Vega and Gamma.</p>
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

          <p className="results-translation">
            <strong>What this means:</strong> both methods use the same computational
            budget, but pairing each simulated market move with its opposite produces a
            more stable answer. For calls, the remaining statistical variance is almost
            halved—so the engine extracts roughly twice as much information from the same
            number of simulated outcomes.
          </p>

          <figure className="case-study-figure" data-reveal>
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

          <figure className="case-study-figure" data-reveal>
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
            <p className="section-index">04 / Greeks convergence</p>
            <div className="greeks-study-heading">
              <h2 id="greeks-title">Sensitivity estimates converge with measured uncertainty.</h2>
              <p>
                Across a 300-fold increase in path count, standard errors fall by roughly
                the expected square-root rate. At 600,000 paths, the analytical benchmark
                lies inside the reported 95% confidence interval for each studied Greek.
              </p>
            </div>
            <div className="result-table-wrapper">
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

            <figure className="case-study-figure" data-reveal>
              <Image
                src="/projects/monte-carlo/greeks-convergence.png"
                alt="Monte Carlo call and put Delta, Gamma and Vega estimates with 95% confidence intervals converging towards their Black-Scholes benchmarks"
                width={3000}
                height={1600}
              />
              <figcaption>
                Delta, Gamma and Vega estimates converge towards their analytical
                Black–Scholes values. Error bars show the Monte Carlo 95% confidence
                interval at each simulation count.
              </figcaption>
            </figure>

            <figure className="case-study-figure" data-reveal>
              <Image
                src="/projects/monte-carlo/greeks-standard-error.png"
                alt="Log-log plots of Delta, Gamma and Vega estimator standard errors following the expected inverse square-root simulation scaling"
                width={3000}
                height={1000}
              />
              <figcaption>
                The estimator standard errors track the N⁻¹ᐟ² reference slope, providing
                an empirical check of the expected Monte Carlo convergence rate.
              </figcaption>
            </figure>

            <p className="greeks-note">
              <strong>Why this matters:</strong> a risk figure without uncertainty can look
              more precise than it really is. These confidence intervals show the range
              of values supported by the simulation, while the convergence study checks
              that this range narrows predictably as more paths are added. The underlying
              data is exported to CSV so the result can be inspected and reproduced.
            </p>
            <a
              className="greeks-data-link"
              href="/projects/monte-carlo/greeks-convergence.csv"
              download
            >
              Download study data <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="case-study-impact" aria-labelledby="impact-title" data-reveal>
          <p className="section-index">05 / Impact</p>
          <div>
            <h2 id="impact-title">Why this project matters beyond the model.</h2>
            <p className="impact-intro">
              Financial models influence decisions only when their outputs can be trusted.
              This project moves from simply producing a price to showing how accurate it
              is, how sensitive it is to changing markets and how efficiently that evidence
              can be generated.
            </p>
            <div className="impact-grid">
              <article>
                <strong>01</strong>
                <h3>More confidence per computation</h3>
                <p>
                  Antithetic sampling nearly halves call-price variance without increasing
                  the number of simulated market outcomes. The same computational budget
                  therefore produces a more stable estimate.
                </p>
              </article>
              <article>
                <strong>02</strong>
                <h3>Risk that can be interpreted</h3>
                <p>
                  Delta, Gamma and Vega translate a single option price into an explanation
                  of how exposure changes when price and volatility move—information that
                  is closer to an actual risk decision.
                </p>
              </article>
              <article>
                <strong>03</strong>
                <h3>Evidence instead of false precision</h3>
                <p>
                  Confidence intervals, analytical benchmarks and convergence tests make
                  uncertainty visible. A reviewer can see not only the answer, but also why
                  it should be believed and where its limitations remain.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-study-engineering" aria-labelledby="engineering-title" data-reveal>
          <p className="section-index">06 / Engineering</p>
          <div>
            <h2 id="engineering-title">Designed as a reproducible numerical system.</h2>
            <p className="engineering-intro">
              The project demonstrates the full workflow behind trustworthy quantitative
              software: derive a method, implement it, compare it with an independent
              benchmark, quantify error and automate the checks so future changes cannot
              silently break the result.
            </p>
            <figure className="editorial-photo editorial-photo-contained">
              <Image
                src="/projects/monte-carlo/data-analysis-workstation.jpg"
                alt="A laptop displaying source code and analytical charts during a software-development workflow"
                width={2400}
                height={1597}
                sizes="(max-width: 900px) 100vw, 75vw"
              />
              <figcaption>
                Numerical research becomes useful when the analysis is implemented,
                tested and made reproducible.
                <span>
                  Photo: {" "}
                  <a
                    href="https://unsplash.com/photos/laptop-screen-displaying-code-and-data-charts-GQOylIn892U"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daniil Komov / Unsplash
                  </a>
                </span>
              </figcaption>
            </figure>
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

        <section className="case-study-next" aria-labelledby="next-title" data-reveal>
          <p className="section-index">07 / Next</p>
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
