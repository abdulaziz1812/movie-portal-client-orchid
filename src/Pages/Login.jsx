import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { Email, Password } = data;
    login(Email, Password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/home");
      })
      .catch((err) => {
        setError({ login: err.code });
      });
  };

  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/home");
      })
      .catch((err) => {
        setError({ googleLogin: err.code });
      });
  };

  return (
    <div className="py-6">
      <div className="w-11/12 mx-auto max-w-sm border bg-gray-200 rounded-2xl shadow-2xl">
        <h2 className="text-center text-xl md:text-4xl pt-4 font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">{errors.Password.message}</p>
            )}
            <label className="label">
              <Link
                to={"/forget-password"}
                className="label-text link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-outline bg-white">
              Login
            </button>
          </div>
          {error.login && <p className="text-red-500">{error.login}</p>}
        </form>
        <p className="text-center font-bold">OR</p>
        <div className="card-body py-2">
          <button onClick={handelGoogle} className="btn btn-outline bg-white">
            <FcGoogle className="text-xl" /> Login with Google
          </button>
          {error.googleLogin && (
            <p className="text-red-500">{error.googleLogin}</p>
          )}
        </div>
        <p className="text-center font-semibold pb-9">
          Don&apos;t have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
