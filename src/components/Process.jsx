const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your business, users and technology requirements.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We define the right strategy, architecture and a clear digital experience.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "We turn the strategy into a high-quality working digital product.",
  },
  {
    num: "04",
    title: "Deliver & Grow",
    desc: "We launch, optimize and help your technology evolve over time.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">How we work</div>
          <h2>A simple process. Powerful results.</h2>
          <p>
            Our process keeps projects focused, transparent and aligned with
            the outcomes that matter.
          </p>
        </div>

        <ol className="process-grid">
          {STEPS.map((s, i) => (
            <li key={s.num} className="process-card reveal">
              <div className="process-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < STEPS.length - 1 && (
                <svg
                  className="process-arrow"
                  width="40"
                  height="14"
                  viewBox="0 0 40 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7h36M32 2l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
