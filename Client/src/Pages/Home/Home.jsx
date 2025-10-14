import React from "react";
import { useTheme } from "@/styles/theme";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import OverviewTab from "@/components/Molecules/UserHome/OverviewTab";
import SectionsTab from "@/components/Molecules/UserHome/SectionsTab";
import userConfig from "@/hooks/userConfig";
import { H1 } from "@/components/Atoms/Shared/headings";

const Home = () => {
  const theme = useTheme();
  const user = userConfig; // will replace with API calls
  const userSections = user?.sections;

  const tabs = [
    { name: "Overview", component: <OverviewTab theme={theme} /> },
    {
      name: "Sections",
      component: <SectionsTab theme={theme} otherSections={userSections} />,
    },
  ];

  return (
    <div className="lg:p-6 p-1">
      <H1>Dashboard</H1>
      <TabComponent tabs={tabs} variant="default" grayBg={theme?.grayBg} />
    </div>
  );
};

export default Home;
