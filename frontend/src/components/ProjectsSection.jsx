// src/components/ProjectsSection.jsx
import { useEffect, useState } from "react";
import api from "../api.js";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Our Projects</h2>
      <p className="section-subtitle">
        Explore some of the properties and spaces we&apos;ve recently staged and
        marketed for our clients.
      </p>

      <div className="cards-grid">
        {projects.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 14 }}>
            No projects yet. Add some from the admin panel.
          </p>
        )}

        {projects.map((project) => (
          <article key={project._id} className="card">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="card-img"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/3965553/pexels-photo-3965553.jpeg?auto=compress&cs=tinysrgb&w=800";
              }}
            />
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-desc">{project.description}</p>
              <span className="card-readmore">Read More →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
