import { SERVICES } from "../data/services.js";

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">What we do</div>
          <h2>Technology that moves your business forward.</h2>
          <p>
            From strategy to development, we create digital experiences and
            technology solutions designed around real business needs.
          </p>
        </div>

        <div className="service-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card reveal">
              <div className="service-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
