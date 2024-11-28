import { lazy } from "react";
const routes = [
  { path: "/", component: lazy(() => import("./Home")) },
  { path: "/experiences", component: lazy(() => import("./Experiences")) },
  { path: "/projects", component: lazy(() => import("./Projects")) },
  { path: "/education", component: lazy(() => import("./Education")) },

  { path: "/contact-me", component: lazy(() => import("./Contacts")) },
];

export default routes;