import { Route, Routes } from "react-router";
import Home from "./screens/home/Home";
import DashboardLayout from "./screens/dashboard/DashboardLayout";
import DashboardHome from "./screens/dashboard/dashboardHome/DashboardHome";
import Settings from "./screens/dashboard/settings/Settings";
import NotFound from "./screens/NotFound";

const AppRoutes = () => {
  return (
    <div className="font-inter">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route
            index
            element={<DashboardHome />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
