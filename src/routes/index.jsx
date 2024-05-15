import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import NotFound from "../pages/NotFound.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import LayaoutPrivate from "../layout/LayaoutPrivate.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/dashboard",
        element: <LayaoutPrivate />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);
