import { Route, Routes } from "react-router";
import Home from "./screens/home/Home";
import DashboardLayout from "./screens/dashboard/DashboardLayout";
import DashboardHome from "./screens/dashboard/dashboardHome/DashboardHome";
import Settings from "./screens/dashboard/settings/Settings";
import NotFound from "./screens/NotFound";
import Finance from "./screens/dashboard/finance/Finance";
import Report from "./screens/dashboard/report/Report";
import Analytics from "./screens/dashboard/analytics/Analytics";

const AppRoutes = () => {
  return (
    <div className="font-inter">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        {/* ---> Dashboard routes */}
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route
            index
            element={<DashboardHome />}
          />
          <Route
            path="analytics"
            element={<Analytics />}
          />
          <Route
            path="report"
            element={<Report />}
          />
          <Route
            path="finance"
            element={<Finance />}
          />
          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        {/* ---> 404 Not found routes */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
