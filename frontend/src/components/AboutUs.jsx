// src/components/AboutUs.jsx
const AboutUs = () => {
  return (
    <section className="section" id="about">
      <div className="about-layout">
        <div>
          <div className="about-tag">About Us</div>
          <h2 className="about-title">
            A trusted partner for consultation, staging and marketing.
          </h2>
          <p className="about-text">
            RealTrust works with owners, builders and realtors to plan, design
            and promote properties that stand out in competitive markets. From
            early consultation to final walkthroughs, we stay involved at every
            step.
          </p>
          <p className="about-highlight">
            We combine strategy, interior design and marketing expertise to
            create a seamless experience for you and a memorable journey for
            your buyers.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/7578935/pexels-photo-7578935.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team discussing project"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
