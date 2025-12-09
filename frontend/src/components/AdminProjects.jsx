// src/components/AdminProjects.jsx
import { useEffect, useState } from "react";
import api from "../api.js";
import { cropImageToAspect } from "../utils/cropImageToAspect.js";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    imageUrl: "",
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data || []);
    } catch (error) {
      console.error("Failed to load projects", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // NEW: handle file upload + cropping to 450x350
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
    if (!form.imageUrl || !form.name || !form.description) {
      alert("Please provide image, name and description.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/projects", form);
      setForm({ imageUrl: "", name: "", description: "" });
      fetchProjects();
    } catch (error) {
      console.error("Failed to create project", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="admin-section-title">Project Management</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        {/* NEW: image file input instead of plain URL */}
        <div className="form-group">
          <label className="form-label">
            Project Image (will be cropped to 450 × 350)
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
              alt="Preview"
              style={{
                marginTop: "8px",
                width: "150px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Project name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Project Description</label>
          <input
            type="text"
            name="description"
            className="form-input"
            placeholder="Short description"
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
          {loading ? "Saving..." : "Add Project"}
        </button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image (cropped)</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{
                    width: 60,
                    height: 40,
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
              </td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{new Date(p.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan="4">No projects yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminProjects;
