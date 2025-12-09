// src/components/AdminContacts.jsx
import { useEffect, useState } from "react";
import api from "../api.js";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await api.get("/contacts");
      setContacts(res.data || []);
    } catch (error) {
      console.error("Failed to load contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <section>
      <h2 className="admin-section-title">Contact Form Responses</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
            </tr>
          ))}
          {contacts.length === 0 && (
            <tr>
              <td colSpan="5">No contact submissions yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminContacts;
