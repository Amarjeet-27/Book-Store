import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import App from "../App";
import SingleBook from "../shop/SingleBook.jsx";
import Dashboard from "../dashboard.jsx/Dashboard.jsx";
import DashboardLayout from "../dashboard.jsx/DashboardLayout.jsx";
import Uploadbook from "../dashboard.jsx/Uploadbook.jsx";
import { Managebooks } from "../dashboard.jsx/Managebooks.jsx";
import EditBooks from "../dashboard.jsx/EditBooks.jsx";
import SignUp from "../components/SignUp.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_REACT_BASE_URL}book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <Uploadbook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Managebooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_REACT_BASE_URL}book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
