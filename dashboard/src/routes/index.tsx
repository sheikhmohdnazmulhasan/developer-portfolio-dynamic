import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Protection from "../middleware/protection";
import AntiLoginProtection from "../middleware/anti-login-protection";
import DashboardLayout from "../pages/dashboard";
import About from "../components/dashboard/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protection>
        <DashboardLayout />
      </Protection>
    ),
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
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
