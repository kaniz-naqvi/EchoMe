import { lazy } from "react";
import { getIcon } from "../helpers/iconsHelper";
import { LAYOUT_DASHBOARD, urls } from "./route-paths";
import { URL_Name } from "./url-names";
// components
const Home = lazy(() => import("@/Pages/Home/Home"));
const Projects = lazy(() => import("@/Pages/Projects/Projects"));

export const allRoutes = [
  {
    path: urls.Home,
    name: URL_Name.home,
    view: Home,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("home"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
  {
    path: urls.Projects,
    name: URL_Name.projects,
    view: Projects,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("folder"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
  {
    path: urls.Templates,
    name: URL_Name.templates,
    view: Projects,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("grid"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
  {
    path: urls.Links,
    name: URL_Name.links,
    view: Projects,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("link"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
];

export const allowedRoutes = () => {
  return allRoutes;
};
