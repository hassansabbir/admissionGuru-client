import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivetRout from "./PrivetRout";
import Admission from "../Pages/Admission/Admission";
import BookingPage from "../Pages/Admission/BookingPage/BookingPage";
import MyCollege from "../Pages/MyCollege/MyCollege";
import MyProfile from "../Pages/MyProfile/MyProfile";
import EditProfile from "../Pages/MyProfile/EditProfile";

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
        element: (
          <PrivetRout>
            <DetailsPage />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/details/${params.id}`),
      },
      {
        path: "/admission",
        element: (
          <PrivetRout>
            <Admission />
          </PrivetRout>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivetRout>
            <BookingPage />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/details/${params.id}`),
      },
      {
        path: "/myCollege",
        element: (
          <PrivetRout>
            <MyCollege />
          </PrivetRout>
        ),
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
