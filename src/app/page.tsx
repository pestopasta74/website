import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Preston Whiteman, home">
          PW<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-index" aria-hidden="true">
            <span>51.38° N</span><span>Bath, UK</span>
          </div>
          <div className="hero-copy">
            <p className="kicker">Physics with Theoretical Physics · University of Bath</p>
            <h1 id="hero-title">Preston Whiteman</h1>
            <p className="hero-statement">
              Applying mathematical reasoning and computation to complex systems, from
              stochastic finance to research-evidence automation.
            </p>
          </div>
          <div className="hero-footer">
            <p>Interested in quantitative finance, technology, research and software engineering placements.</p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button button-secondary" href="https://github.com/pestopasta74" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/pestopasta74/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-index">01 / Selected work</p>
            <h2 id="work-title">Ideas made testable.</h2>
            <p>Selected work across research, quantitative modelling and interdisciplinary engineering.</p>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline"><span>{project.number}</span><span>{project.eyebrow}</span><span className={`status status-${project.status}`}>{project.status.replace("-", " ")}</span></div>
                <div className="project-graphic" aria-hidden="true"><span /><span /><span /><i /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Project themes">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  {project.links.length > 0 ? project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  )) : <span>Online demonstration coming soon</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <p className="section-index">02 / About</p>
          <div className="about-layout">
            <h2 id="about-title">
              I use physics to understand systems and computation to make those ideas
              useful.
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m studying BSc Physics with Theoretical Physics with Professional
                Placement at the University of Bath. The course explores the deep
                relationship between mathematics and theoretical physics while developing
                scientific computing, theoretical modelling and experimental skills.
              </p>
              <p>
                My work spans quantitative modelling, research impact analysis and
                interdisciplinary engineering. Across each, I&apos;m drawn to the same process:
                define the problem carefully, build something testable, examine its limits
                and communicate the result clearly.
              </p>
              <p>
                Through laboratory work, scientific computing and collaborative projects,
                I am developing a practical understanding of measurement, applied
                statistics and the mathematical techniques used to describe physical
                systems. I want to apply that training to problems in finance, technology
                and research during my professional placement.
              </p>
              <dl className="about-facts">
                <div><dt>Based</dt><dd>Bath, United Kingdom</dd></div>
                <div><dt>Degree</dt><dd>BSc Physics with Theoretical Physics with Professional Placement</dd></div>
                <div><dt>Focus</dt><dd>Quantitative analysis · Technology · Research</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="spotlight-section" aria-labelledby="spotlight-title">
          <div className="spotlight-label">
            <p className="section-index">Research spotlight / 2026</p>
            <span>University of Bath</span>
          </div>
          <div className="spotlight-main">
            <p className="spotlight-role">Research &amp; Impact Intern · Bath Insights</p>
            <h2 id="spotlight-title">Turning scattered evidence into structured insight.</h2>
            <p className="spotlight-intro">
              Supporting the University&apos;s research-impact work across policy, health and
              environmental domains. The work combines evidence synthesis with a locally run
              automation workflow.
            </p>
            <div className="spotlight-metrics" aria-label="Internship highlights">
              <div><strong>50+</strong><span>research outputs analysed</span></div>
              <div><strong>04</strong><span>evidence and research platforms</span></div>
              <div><strong>08</strong><span>weeks of full-time research</span></div>
            </div>
            <div className="spotlight-tools">
              <span>Python</span><span>PURE</span><span>Altmetric</span><span>PlumX</span><span>Overton</span><span>Local LLMs</span>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading light-heading">
            <p className="section-index">03 / Experience</p>
            <h2 id="experience-title">Beyond the model.</h2>
            <p>Technical curiosity supported by collaboration, communication and responsibility.</p>
          </div>
          <div className="timeline">
            <article>
              <time>2026 to present</time>
              <div><p>University of Bath</p><h3>Smart Prosthetic Arm · Vertically Integrated Project</h3></div>
              <p>Collaborative software, web infrastructure and technical documentation for an interdisciplinary assistive-technology team.</p>
            </article>
            <article>
              <time>2025 to 2026</time>
              <div><p>Team Bath Racing Electric</p><h3>Autonomous Systems</h3></div>
              <p>Contributed to control and motion-planning work within a multidisciplinary Formula Student engineering environment.</p>
            </article>
            <article>
              <time>2026 to present</time>
              <div><p>University of Bath</p><h3>Student Outreach Ambassador</h3></div>
              <p>Representing the university and communicating clearly with prospective students and families across major events.</p>
            </article>
            <article>
              <time>2023 to 2024</time>
              <div><p>EDT &amp; GE Vernova</p><h3>Industrial Cadets Gold · Project Team Leader</h3></div>
              <p>Led a year-long engineering design project from evaluation through to a formal presentation for industry stakeholders.</p>
            </article>
          </div>
        </section>

        <section className="recognition-section" aria-labelledby="recognition-title">
          <div className="recognition-copy">
            <p className="section-index">04 / Recognition</p>
            <h2 id="recognition-title">Evidence, not adjectives.</h2>
          </div>
          <div className="recognition-grid">
            <article><span>01</span><strong>British Physics Olympiad</strong><p>Gold Award · top approximately 5% nationally</p></article>
            <article><span>02</span><strong>Industrial Cadets</strong><p>Gold Award · engineering project with GE Vernova</p></article>
            <article><span>03</span><strong>Laboratory work</strong><p>90% · Electrical Properties of a Tungsten Filament Lamp</p></article>
            <article><span>04</span><strong>Health Strategy Competition</strong><p>1st place · team leadership and resource allocation</p></article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-index">05 / Contact</p>
          <div>
            <h2 id="contact-title">Let&apos;s examine a difficult problem.</h2>
            <p>I&apos;m exploring placement opportunities across quantitative finance, technology, research and software engineering.</p>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/pestopasta74/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/pestopasta74" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <span>Public CV coming shortly</span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="wordmark" href="#top" aria-label="Back to top">PW<span className="wordmark-dot">.</span></a>
        <p>Preston Whiteman · Bath, UK</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
