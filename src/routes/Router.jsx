import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import Home from "./../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import Todos from "../pages/Dashboard/Todos/Todos";
import PrivateRoute from "./PrivateRoute";
import AddTodo from "../pages/Dashboard/AddTodo/AddTodo";
import UpdateTodo from "../pages/Dashboard/UpdateTodo/UpdateTodo";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "tasks",
        element: <Todos />,
      },
      {
        path: "add-task",
        element: <AddTodo />,
      },
      {
        path: "tasks/update-task/:id",
        element: <UpdateTodo />,
      },
    ],
  },
]);

export default router;
