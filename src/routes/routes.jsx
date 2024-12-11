import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../Error/Error";
import Root from "../components/Root/Root";
import Dashboard from "../components/Dashboard/Dashboard";
import DLeassons from "../components/Dashboard/DashboardPages/DLeassons";
import AddLesson from "../components/Dashboard/DashboardPages/AddLesson";
import AddVocabularies from "../components/Dashboard/DashboardPages/AddVocabularies";
import LManagement from "../components/Dashboard/DashboardPages/LManagement";
import Users from "../components/Dashboard/DashboardPages/Users";
import VManegement from "../components/Dashboard/DashboardPages/VManegement";
import Tutorials from "../components/Tutorials/Tutorials";
import Lessons from "../components/Lessons/Lessons";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regester",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "Dlesson",
            element: <DLeassons />,
          },
          {
            path: "add-lesson",
            element: <AddLesson />,
          },
          {
            path: "add-vocabularies",
            element: <AddVocabularies />,
          },
          {
            path: "Lmanagement",
            element: <LManagement />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "vmanegement",
            element: <VManegement />,
          },
        ],
      },
    ],
  },
]);
