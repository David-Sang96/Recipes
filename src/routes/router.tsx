import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import AboutPage from "../pages/AboutPage";
import HomePage, { homeLoader } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
