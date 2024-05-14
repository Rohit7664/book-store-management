import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import SingleBook from "../Components/Shop/SingleBook";
import DashBoardLayout from "../Components/DashBoard/DashBoardLayout";
import DashBoard from "../Components/DashBoard/DashBoard";
import UploadBook from "../Components/DashBoard/UploadBook";
import ManageBook from "../Components/DashBoard/ManageBook";
import EditBook from "../Components/DashBoard/EditBook";
import Login from "../pages/Login";
import PrivateRoute from "../Private/PrivateRoute";
import Logout from "../pages/Logout";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><DashBoard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/book/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
]);

export default router;
