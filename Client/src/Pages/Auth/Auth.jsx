import React, { useState } from "react";
import Login from "./modules/Login";
import Register from "./modules/Register";
import { H1 } from "@/components/Atoms/Shared/headings";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import { useTheme } from "@/styles/theme";

const Auth = () => {
  const theme = useTheme();
  // const [activeTab, setActiveTab] = useState("Login");

  const tabs = [
    { name: "Login", component: <Login /> },
    { name: "Register", component: <Register /> },
  ];

  return (
    <div className="lg:p-6 p-1">
      <H1 className="text-center mb-4">
        {/* {activeTab === "Login" ? "Welcome Back" : "Let’s Get Started"} */}
      </H1>

      <TabComponent
        tabs={tabs}
        
        onTabChange={(tabName) => setActiveTab(tabName)}
        variant="underline"
        grayBg={theme?.grayBg}
    className="my-5"
 />
    </div>
  );
};

export default Auth;
