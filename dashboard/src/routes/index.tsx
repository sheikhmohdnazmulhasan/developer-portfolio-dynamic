import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import DashboardRoot from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardRoot />,
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
]);

export default router;
