import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedInUser = res.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="space-y-5">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-outline text-xl text-sky-400 border-sky-400 hover:border-none hover:bg-sky-400 w-full"
        >
          <FcGoogle className="h-7 w-7" /> Login With Google
        </button>
        <button className="btn btn-outline w-full text-xl">
          <FaGithub className="h-7 w-7" /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
