import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Protection from "../middleware/protection";
import AntiLoginProtection from "../middleware/anti-login-protection";
import DashboardLayout from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protection>
        <DashboardLayout />
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
