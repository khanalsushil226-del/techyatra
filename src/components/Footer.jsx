import logo from "../assets/logo-mark.jpg";

const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "#services" },
  { label: "Software Solutions", href: "#services" },
  { label: "UI & UX Design", href: "#services" },
  { label: "Cloud Solutions", href: "#services" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Yatra Technologies" />
            <p>
              Building modern digital solutions for businesses ready to move
              forward with technology.
            </p>
          </div>

          <nav className="footer-column" aria-label="Company">
            <h4>Company</h4>
            {COMPANY.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Services">
            <h4>Services</h4>
            {SERVICE_LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Connect">
            <h4>Connect</h4>
            <a href="mailto:hello@yatratechnologies.com">Email Us</a>
            <a href="#contact">Start a Project</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Yatra Technologies. All rights reserved.</span>
          <span>Technology for a smarter tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
