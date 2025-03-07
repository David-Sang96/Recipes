import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import AboutPage from "../pages/AboutPage";
import HomePage, { homeLoader } from "../pages/HomePage";
import Recipepage, { recipeLoader } from "../pages/Recipepage";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
      { path: "/about", element: <AboutPage /> },
      { path: "/recipe/:id", element: <Recipepage />, loader: recipeLoader },
    ],
    errorElement: <Errorpage />,
  },
]);

export default router;
