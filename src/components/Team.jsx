import sajan from "../assets/sajan-rai.jpg";
import sushil from "../assets/sushil-khanal.jpg";

const TEAM = [
  { name: "Sajan Rai", role: "Co-Founder, CTO", photo: sajan },
  { name: "Sushil Khanal", role: "Co-Founder, CEO", photo: sushil },
];

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-header center reveal">
          <div className="section-label">Meet the team</div>
          <h2>People who make it happen.</h2>
          <p>
            Our team is made up of experienced designers, developers and
            strategists who are passionate about technology and innovation.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="team-member reveal">
              <div className="team-photo">
                <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" />
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
