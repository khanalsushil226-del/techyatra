export default function Cta() {
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta-box reveal">
          <h2>Have an idea? Let&apos;s build something meaningful.</h2>
          <p>
            Tell us about your project, challenge or idea and let&apos;s explore
            what technology can do for you.
          </p>
          <a href="mailto:hello@yatratechnologies.com" className="btn">
            Get in Touch
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
