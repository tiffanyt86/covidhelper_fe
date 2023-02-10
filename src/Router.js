// import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Launch from "./Launch";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VaccinesMain from "./pages/VaccinesMain";
import About from "./pages/About";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import FourOhFour from "./pages/FourOhFour";
import Nav from "./components/Nav";

const MainLayout = () => (
  <AuthProvider>
    <Layout>
      <Outlet />
    </Layout>
  </AuthProvider>
);

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <VaccinesMain />,
        path: "/vaccines",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Logout />,
        path: "/logout",
      },
      // {
      //   element: <Navigate to="/404" replace />,
      //   path: "*",
      // },
    ],
  },
  // unprotect views
  {
    element: <Launch />,
    path: "",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <FourOhFour />,
    path: "404",
  },
  {
    element: <Navigate to="/404" replace />,
    path: "*",
  },
];
