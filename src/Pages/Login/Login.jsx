import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="loginPage py-24">
      <div className="text-white w-7/12 mt-16 ms-auto me-10">
        <h2 className="text-5xl text-center font-bold">Please Login! </h2>
        <p className="text-2xl my-5 text-center">
          Welcome to AdmissionGuru Login! 🚪🔑 Sign in to embark on your journey
          to educational excellence. As an AdmissionGuru member, access a wealth
          of information, personalized college recommendations, and expert
          guidance to make informed decisions about your future.
        </p>
      </div>
      <div className="card ms-auto me-48 flex-shrink-0 w-full max-w-xl bg-base-100 shadow-2xl ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-xl bg-transparent border-black">
              Login
            </button>
          </div>
          <p className="text-center text-xl">
            New To ModaBella?{" "}
            <Link to="/signUp" className="underline font-bold">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
