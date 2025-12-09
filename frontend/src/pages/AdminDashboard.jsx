// src/pages/AdminDashboard.jsx
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminProjects from "../components/AdminProjects.jsx";
import AdminClients from "../components/AdminClients.jsx";
import AdminContacts from "../components/AdminContacts.jsx";
import AdminSubscribers from "../components/AdminSubscribers.jsx";

const AdminDashboard = () => {
  const [active, setActive] = useState("projects");

  const renderSection = () => {
    if (active === "projects") return <AdminProjects />;
    if (active === "clients") return <AdminClients />;
    if (active === "contacts") return <AdminContacts />;
    if (active === "subscribers") return <AdminSubscribers />;
    return null;
  };

  return (
    <div className="admin-layout">
      <AdminSidebar active={active} setActive={setActive} />
      <main className="admin-main">{renderSection()}</main>
    </div>
  );
};

export default AdminDashboard;
