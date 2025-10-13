import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Molecules/NavBar/NavBar";
import { applyTheme } from "@/utils/helpers/themeHelper";

const Dashboard = ({ navLinks }) => {
  useEffect(() => {
    applyTheme({ type: "dashboard" });
  }, []);

  return (
    <main className="min-h-screen w-full main">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed h-full w-28">
        <NavBar navLinks={navLinks} variant="sidebar" />
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden">
        <NavBar navLinks={navLinks} variant="bottombar" />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-28 pb-16 lg:pb-0">
        <div className="lg:p-4 p-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
