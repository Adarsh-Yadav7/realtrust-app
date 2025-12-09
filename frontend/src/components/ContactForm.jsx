// src/components/ContactForm.jsx
import { useState } from "react";
import api from "../api.js";

const ContactForm = ({ compact }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.fullName || !form.email || !form.mobile || !form.city) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    try {
      setLoading(true);
      await api.post("/contacts", form);
      setStatus({
        type: "success",
        message: "Thanks! We will contact you shortly.",
      });
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {!compact && <label className="form-label">Full Name</label>}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-input"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        {!compact && <label className="form-label">Email Address</label>}
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="form-input"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        {!compact && <label className="form-label">Mobile Number</label>}
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="form-input"
          value={form.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        {!compact && <label className="form-label">City</label>}
        <input
          type="text"
          name="city"
          placeholder="Area, City"
          className="form-input"
          value={form.city}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="form-button" disabled={loading}>
        {loading ? "Submitting..." : "Get Quick Quote"}
      </button>

      {status.message && (
        <p
          className={
            status.type === "success" ? "success-text" : "error-text"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
