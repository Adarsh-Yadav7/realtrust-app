// src/components/AdminSidebar.jsx
const AdminSidebar = ({ active, setActive }) => {
  const links = [
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Clients" },
    { id: "contacts", label: "Contact Forms" },
    { id: "subscribers", label: "Subscribers" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">Admin Panel</div>
      {links.map((link) => (
        <div
          key={link.id}
          className={
            "sidebar-link " + (active === link.id ? "active" : "")
          }
          onClick={() => setActive(link.id)}
        >
          {link.label}
        </div>
      ))}
    </aside>
  );
};

export default AdminSidebar;
