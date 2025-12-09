// src/components/AdminClients.jsx
import { useEffect, useState } from "react";
import api from "../api.js";
import { cropImageToAspect } from "../utils/cropImageToAspect.js";

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    imageUrl: "",
    name: "",
    designation: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data || []);
    } catch (error) {
      console.error("Failed to load clients", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // NEW: handle client image cropping
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const base64 = await cropImageToAspect(file, 450, 350);
      setForm((prev) => ({ ...prev, imageUrl: base64 }));
    } catch (err) {
      console.error("Failed to crop image", err);
      alert("Image cropping failed. Please try another image.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.imageUrl ||
      !form.name ||
      !form.designation ||
      !form.description
    ) {
      alert("Please fill all client fields with image.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/clients", form);
      setForm({ imageUrl: "", name: "", designation: "", description: "" });
      fetchClients();
    } catch (error) {
      console.error("Failed to create client", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="admin-section-title">Client Management</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Client Image (cropped to 450 × 350)
          </label>
          <input
            type="file"
            accept="image/*"
            className="form-input"
            onChange={handleFileChange}
          />
          {form.imageUrl && (
            <img
              src={form.imageUrl}
              alt="Client preview"
              style={{
                marginTop: "8px",
                width: "120px",
                height: "auto",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
              }}
            />
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Client Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Designation</label>
          <input
            type="text"
            name="designation"
            className="form-input"
            placeholder="CEO, Designer..."
            value={form.designation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            className="form-input"
            placeholder="Short testimonial"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="form-button"
          style={{ maxWidth: 180 }}
          disabled={loading}
        >
          {loading ? "Saving..." : "Add Client"}
        </button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image (cropped)</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c._id}>
              <td>
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "999px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{c.name}</td>
              <td>
                <span className="chip">{c.designation}</span>
              </td>
              <td>{c.description}</td>
            </tr>
          ))}
          {clients.length === 0 && (
            <tr>
              <td colSpan="4">No clients yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminClients;
