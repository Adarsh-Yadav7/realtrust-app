// src/components/Navbar.jsx
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  return (
    <header className="navbar">
      <div
        className="nav-brand"
        onClick={() => scrollToId("home")}
        style={{ cursor: "pointer" }}
      >
        <div className="nav-logo-circle" />
        <span className="nav-brand-text">RealTrust</span>
      </div>

      <nav className="nav-menu">
        <span className="nav-link" onClick={() => scrollToId("home")}>
          Home
        </span>
        <span className="nav-link" onClick={() => scrollToId("services")}>
          Services
        </span>
        <span className="nav-link" onClick={() => scrollToId("about")}>
          About
        </span>
        <span className="nav-link" onClick={() => scrollToId("testimonials")}>
          Testimonials
        </span>
        <span className="nav-link" onClick={() => scrollToId("contact")}>
          Contact
        </span>
      </nav>

      <button className="nav-cta" onClick={() => scrollToId("contact")}>
        {/* Get a Quote */}
      </button>
    </header>
  );
};

export default Navbar;
