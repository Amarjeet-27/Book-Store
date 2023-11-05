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
          fetch(`http://localhost:3001/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
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
          fetch(`http://localhost:3001/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
