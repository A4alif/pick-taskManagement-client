import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import Home from "./../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import Todos from "../pages/Dashboard/Todos/Todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element:<DashboardLayout />,
    children: [
        {
            path: "todos",
            element: <Todos />
        }
    ]
  }
]);

export default router;
