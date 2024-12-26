import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import DashboardRoot from "../pages/dashboard";
import Protection from "../middleware/protection";
import AntiLoginProtection from "../middleware/anti-login-protection";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protection>
        <DashboardRoot />
      </Protection>
    ),
  },

  {
    path: "/auth/login",
    element: (
      <AntiLoginProtection>
        <Login />
      </AntiLoginProtection>
    ),
  },
]);

export default router;
