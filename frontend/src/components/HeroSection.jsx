// src/components/HeroSection.jsx
import ContactForm from "./ContactForm.jsx";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div>
        <div className="hero-badges">
          <span className="hero-badge">Consultation</span>
          <span className="hero-badge">Design</span>
          <span className="hero-badge">Marketing</span>
        </div>
        <h1 className="hero-heading">Consultation, Design &amp; Marketing.</h1>
        <p className="hero-sub">
          We help you stage, market and sell properties with a data-backed
          strategy and beautiful experiences that make every listing stand out.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            {/* <span>250+</span>
            Successful Projects */}
          </div>
          <div className="hero-stat">
            {/* <span>98%</span>
            Happy Clients */}
          </div>
          <div className="hero-stat">
            {/* <span>10yrs</span>
            Real Estate Expertise */}
          </div>
        </div>
      </div>

      {/* Right side form card similar to reference */}
      <div className="hero-form-card" id="contact">
        <h3 className="hero-form-title">Get a Free Consultation</h3>
        <ContactForm compact />
      </div>
    </section>
  );
};

export default HeroSection;
