// src/components/NewsletterSection.jsx
import { useState } from "react";
import api from "../api.js";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!email) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    try {
      setLoading(true);
      await api.post("/subscribers", { email });
      setStatus({
        type: "success",
        message: "Subscribed to our newsletter!",
      });
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Could not subscribe. Maybe already added?",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-wrap">
        <div>
          <h3 className="newsletter-title">
            Learn more about our listing process.
          </h3>
          <p className="newsletter-sub">
            Get tips on staging, digital marketing and selling faster, delivered
            straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubscribe}>
          <div className="newsletter-input-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="form-button"
              style={{ width: "150px" }}
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {status.message && (
            <p
              className={
                status.type === "success" ? "success-text" : "error-text"
              }
              style={{ textAlign: "left" }}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>

      {/* NEW: RealTrust logo + social icons row */}
      <div className="newsletter-footer">
        <div className="newsletter-brand">
          <div className="nav-logo-circle" />
          <span className="newsletter-brand-text">RealTrust</span>
        </div>

        <div className="social-icons">
          <button
            type="button"
            className="social-icon social-icon--facebook"
            aria-label="Facebook"
          >
            f
          </button>
          <button
            type="button"
            className="social-icon social-icon--instagram"
            aria-label="Instagram"
          >
            ♡
          </button>
          <button
            type="button"
            className="social-icon social-icon--twitter"
            aria-label="Twitter"
          >
            t
          </button>
          <button
            type="button"
            className="social-icon social-icon--linkedin"
            aria-label="LinkedIn"
          >
            in
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
