import logo from "../assets/logo.png";

const POINTS = [
  "Business-focused technology solutions",
  "Modern and scalable digital architecture",
  "User-centered product experiences",
  "Long-term technology partnerships",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="about-center">
              <img src={logo} alt="Yatra Technologies logo" />
            </div>
            <div className="floating-card floating-one">Digital Innovation</div>
            <div className="floating-card floating-two">Future Ready</div>
          </div>

          <div className="about-content reveal">
            <div className="section-label">About Yatra Technologies</div>
            <h2>Where ideas become technology.</h2>
            <p>
              We believe great technology should make things simpler, smarter
              and more connected. Yatra Technologies is focused on creating
              digital products and solutions that are practical, elegant and
              built for the future.
            </p>

            <ul className="check-list">
              {POINTS.map((p) => (
                <li key={p}>
                  <span className="check" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5 4.8 9.2 10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
