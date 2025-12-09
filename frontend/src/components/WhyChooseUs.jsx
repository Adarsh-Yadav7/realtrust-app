// src/components/WhyChooseUs.jsx
const WhyChooseUs = () => {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Why Choose Us</h2>
      <p className="section-subtitle">
        From higher returns to thoughtful design and targeted marketing, RealTrust
        brings everything you need under one roof.
      </p>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-label">Potential ROI</div>
          <div className="why-title">Better Returns on Every Listing</div>
          <p className="why-desc">
            We analyse your local market, recommend pricing and positioning and
            help you close faster with smart, data-backed strategies.
          </p>
        </div>

        <div className="why-card">
          <div className="why-label">Design</div>
          <div className="why-title">Thoughtful, Modern Interiors</div>
          <p className="why-desc">
            Our team designs spaces that photograph beautifully, feel premium in
            person and convert more visitors into serious buyers.
          </p>
        </div>

        <div className="why-card">
          <div className="why-label">Marketing</div>
          <div className="why-title">Targeted Marketing Campaigns</div>
          <p className="why-desc">
            From digital campaigns to listing portals, we promote your property
            wherever your ideal buyers are spending time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
