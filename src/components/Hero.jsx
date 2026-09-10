const VALUES = [
  { title: "Innovation First", desc: "Modern tech, thoughtfully applied" },
  { title: "Digital Solutions", desc: "From idea to shipped product" },
  { title: "Built to Scale", desc: "Architecture that grows with you" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content reveal">
          <div className="badge">
            <span />
            Technology. Innovation. Growth.
          </div>

          <h1>
            Building the <strong>digital future</strong> with technology.
          </h1>

          <p>
            Yatra Technologies creates modern digital solutions that help businesses
            simplify complexity, improve efficiency and turn ideas into meaningful
            technology products.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Start a Project
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

          <ul className="hero-values">
            {VALUES.map((v) => (
              <li key={v.title}>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
