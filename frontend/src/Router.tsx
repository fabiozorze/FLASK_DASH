import { createBrowserRouter } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { Dashboard } from "./pages/Dashboard"
import { Authentication } from "./pages/auth/TwoFactorAuth"
import { SignUp } from "./pages/auth/SignUp"
import { DashboardLayout } from "./layouts/dashboard"
import { Portfolio } from "./pages/portfolio"
import { Estrategias } from "./pages/Estrtegias"
// import { DashboardLayout } from "./pages/_layout/dashboard"

// Flat route table that matches your current working paths
// export const router = createBrowserRouter([
//   { path: "/", element: <Login /> },
//   { path: "/dashboard", element: <Dashboard /> },
//   { path: "/two-factor", element: <Authentication /> },
//   { path: "/signup", element: <SignUp /> },
// ])

// If/when you want a layout for dashboard-only pages, use this shape instead:
export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/two-factor", element: <Authentication /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "estrategias", element: <Estrategias /> },
    ],
  },
])