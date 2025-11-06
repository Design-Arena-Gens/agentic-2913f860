'use client';

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <img src="/logo.svg" alt="NovaWorks" width="28" height="28" />
            <span>NovaWorks</span>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn btn-small">Get started</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Digital services that turn ideas into impact</h1>
            <p>
              We help ambitious teams design delightful experiences, build scalable platforms, and grow with data-driven marketing.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn">Book a discovery call</a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
            <div className="trust">
              <span>Trusted by teams at</span>
              <div className="logos">
                <span>Acme</span><span>Pulse</span><span>Northstar</span><span>Zephyr</span>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="glass-card">
              <div className="metric">
                <span className="label">Launch time</span>
                <span className="value">-43%</span>
              </div>
              <div className="metric">
                <span className="label">Conversion</span>
                <span className="value">+28%</span>
              </div>
              <div className="metric">
                <span className="label">Uptime</span>
                <span className="value">99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="grid grid-3">
            <article className="card">
              <h3>Product Design</h3>
              <p>Research, UX/UI, prototypes, and design systems that delight and convert.</p>
              <ul>
                <li>User research & journey mapping</li>
                <li>Wireframes & interactive prototypes</li>
                <li>Design systems & accessibility</li>
              </ul>
            </article>
            <article className="card">
              <h3>Full?stack Development</h3>
              <p>Modern web apps with robust APIs, performance, and security by default.</p>
              <ul>
                <li>Next.js, Node, serverless</li>
                <li>Scalable data & integrations</li>
                <li>QA automation & observability</li>
              </ul>
            </article>
            <article className="card">
              <h3>Growth & Marketing</h3>
              <p>Experimentation, SEO, and lifecycle campaigns that compound over time.</p>
              <ul>
                <li>SEO & content strategy</li>
                <li>Analytics & funnels</li>
                <li>Lifecycle & CRM setup</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="section alt">
        <div className="container">
          <h2 className="section-title">Selected work</h2>
          <div className="grid grid-3">
            <div className="case">
              <h4>Fintech onboarding</h4>
              <p>Reduced KYC drop?off by 32% with a redesigned flow and progressive profiling.</p>
            </div>
            <div className="case">
              <h4>E?commerce performance</h4>
              <p>Improved Core Web Vitals to pass thresholds, lifting revenue 18% MoM.</p>
            </div>
            <div className="case">
              <h4>SaaS activation</h4>
              <p>Sequenced onboarding nudges raised week?1 activation by 24%.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <h2 className="section-title">Simple pricing</h2>
          <div className="grid grid-3">
            <div className="price">
              <h3>Starter</h3>
              <p className="price-tag">$4,800 <span>/ project</span></p>
              <ul>
                <li>1 core feature</li>
                <li>Design + dev sprint</li>
                <li>2 weeks, fixed scope</li>
              </ul>
              <a href="#contact" className="btn btn-block">Get started</a>
            </div>
            <div className="price featured">
              <div className="badge">Popular</div>
              <h3>Growth</h3>
              <p className="price-tag">$6,800 <span>/ month</span></p>
              <ul>
                <li>Product + growth squad</li>
                <li>2 week sprints</li>
                <li>Roadmap + KPIs</li>
              </ul>
              <a href="#contact" className="btn btn-block">Book call</a>
            </div>
            <div className="price">
              <h3>Enterprise</h3>
              <p className="price-tag">Custom <span>/ annual</span></p>
              <ul>
                <li>Strategic partnership</li>
                <li>Security & compliance</li>
                <li>Priority SLA</li>
              </ul>
              <a href="#contact" className="btn btn-block">Contact sales</a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section alt">
        <div className="container">
          <h2 className="section-title">What clients say</h2>
          <div className="grid grid-3">
            <blockquote className="quote">
              <p>?They move from idea to shipped in days, not months.?</p>
              <cite>? Maya R., VP Product</cite>
            </blockquote>
            <blockquote className="quote">
              <p>?A rare team that blends design craft with engineering rigor.?</p>
              <cite>? Leo S., CTO</cite>
            </blockquote>
            <blockquote className="quote">
              <p>?Numbers went up and stayed up. That?s what matters.?</p>
              <cite>? Dana K., CEO</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-inner">
          <div className="contact-copy">
            <h2>Tell us about your goals</h2>
            <p>Share a few details and we?ll reply within one business day.</p>
            <ul className="bullets">
              <li>Free 30?minute discovery call</li>
              <li>Actionable roadmap outline</li>
              <li>No obligation</li>
            </ul>
          </div>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <label>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Jane Doe" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="jane@company.com" />
              </label>
            </div>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Acme Inc." />
            </label>
            <label>
              <span>What can we help with?</span>
              <textarea name="message" rows={5} required placeholder="Briefly describe your project or goals..." />
            </label>
            <button type="submit" className="btn btn-block">Request consultation</button>
            <p className="fineprint">By submitting, you agree to our terms and privacy policy.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <img src="/logo.svg" alt="NovaWorks" width="24" height="24" />
            <span>NovaWorks</span>
          </a>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="copyright">? {new Date().getFullYear()} NovaWorks. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
