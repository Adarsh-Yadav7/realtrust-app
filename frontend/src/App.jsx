// src/App.jsx
import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="app-root">
      {/* simple toggle instead of auth */}
      <button
        className="admin-toggle-btn"
        onClick={() => setIsAdmin((prev) => !prev)}
      >
        {isAdmin ? "Go to Landing Page" : "Go to Admin Panel"}
      </button>

      {isAdmin ? <AdminDashboard /> : <LandingPage />}
    </div>
  );
}

export default App;
