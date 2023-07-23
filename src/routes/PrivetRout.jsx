import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to Login first to access this.",
    });
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivetRout;
