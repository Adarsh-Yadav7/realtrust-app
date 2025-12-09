// src/components/AdminSubscribers.jsx
import { useEffect, useState } from "react";
import api from "../api.js";

const AdminSubscribers = () => {
  const [subs, setSubs] = useState([]);

  const fetchSubs = async () => {
    try {
      const res = await api.get("/subscribers");
      setSubs(res.data || []);
    } catch (error) {
      console.error("Failed to load subscribers", error);
    }
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  return (
    <section>
      <h2 className="admin-section-title">Subscribed Email Addresses</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Subscribed On</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((s) => (
            <tr key={s._id}>
              <td>{s.email}</td>
              <td>{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))}
          {subs.length === 0 && (
            <tr>
              <td colSpan="2">No subscribers yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminSubscribers;
