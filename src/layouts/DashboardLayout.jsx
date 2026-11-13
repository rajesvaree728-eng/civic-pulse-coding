import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const getActivePage = () => {
    if (location.pathname === "/") return "Dashboard";
    if (location.pathname.startsWith("/projects")) return "Projects";
    if (location.pathname.startsWith("/reports")) return "Reports";
    if (location.pathname.startsWith("/settings")) return "Settings";

    return "Dashboard";
  };

  const handleNavigate = (page) => {
    const routes = {
      Dashboard: "/",
      Projects: "/projects",
      Reports: "/reports",
      Settings: "/settings",
    };

    navigate(routes[page] || "/");
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex">
        <Sidebar
          activePage={getActivePage()}
          onNavigate={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;