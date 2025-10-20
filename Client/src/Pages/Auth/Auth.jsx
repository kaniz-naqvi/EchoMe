import React, { useState } from "react";
import Login from "./modules/Login";
import Register from "./modules/Register";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import { useTheme } from "@/styles/theme";
import { H1 } from "@/components/Atoms/Shared/headings";

const Auth = () => {
  const theme = useTheme();
  const background = theme.background;
  const textColor = theme.text;
  const tabs = [
    { name: "Login", component: <Login /> },
    { name: "Register", component: <Register /> },
  ];

  return (
    <div
      className="lg:p-6 min-h-[100dvh] w-full pt-12 p-1"
      style={{ background: background, color: textColor }}
    >
      <H1>Get Started</H1>
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default Auth;
