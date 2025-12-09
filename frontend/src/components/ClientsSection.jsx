// src/components/ClientsSection.jsx
import { useEffect, useState } from "react";
import api from "../api.js";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

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

  return (
    <section className="section" id="testimonials">
      <h2 className="section-title">Happy Clients</h2>
      <p className="section-subtitle">
        A few words from the builders, owners and agents who trusted us with
        their projects.
      </p>

      <div className="cards-grid">
        {clients.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 14 }}>
            No clients yet. Add some from the admin panel.
          </p>
        )}

        {clients.map((client) => (
          <article key={client._id} className="card client-card">
            <div className="card-body">
              <p className="client-quote">“{client.description}”</p>

              <div className="client-header" style={{ marginTop: 14 }}>
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="client-avatar"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                <div>
                  <div className="client-name">{client.name}</div>
                  <div className="client-role">{client.designation}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
