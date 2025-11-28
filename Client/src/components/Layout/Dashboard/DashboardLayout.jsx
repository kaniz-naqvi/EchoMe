import RowSkeleton from "@/components/Atoms/Skeleton/RowSkeleton";
import React, { lazy, Suspense } from "react";
const NavBar = lazy(() => import("@/components/Molecules/NavBar/NavBar"));

const DashboardLayout = ({ navLinks, Outlet, colors }) => {
  return (
    <main
      style={{ background: colors.background, color: colors.text }}
      className="min-h-screen w-full"
    >
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed h-full w-28">
        <Suspense fallback={<RowSkeleton height="100dvh" width="7rem" />}>
          <NavBar navLinks={navLinks} colors={colors} />
        </Suspense>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 z-10">
        <Suspense fallback={<RowSkeleton height="56px" width="100dvw" />}>
          <NavBar navLinks={navLinks} colors={colors} variant="bottombar" />
        </Suspense>
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

export default DashboardLayout;
