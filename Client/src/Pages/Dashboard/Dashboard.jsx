import Loader from "@/components/Atoms/Loader/Loader";
import { useTheme } from "@/styles/theme";
import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const DashboardLayout = lazy(() =>
  import("@/components/Layout/Dashboard/DashboardLayout")
);

const Dashboard = ({ navLinks }) => {
  const colors = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <DashboardLayout Outlet={Outlet} navLinks={navLinks} colors={colors} />
    </Suspense>
  );
};

export default Dashboard;
