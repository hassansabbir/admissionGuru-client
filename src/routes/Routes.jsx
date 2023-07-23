import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/details/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
