import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout
import MainLayouts from "./Components/Layouts/MainLayouts";


// Pages
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductsPage from "./Pages/ProductsPage";
import ErrorPage from "./Pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />, // Ini layout yang reusable
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
