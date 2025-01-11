import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/home");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });

    setError({});
  };

  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/home");
      })
      .catch((err) => {
        setError({ ...error, googleLogin: err.code });
      });
  };

  return (
   <div className="py-6">
     <div className="w-11/12 mx-auto max-w-sm border bg-gray-200 rounded-2xl shadow-2xl  ">
      <div>
        <h2 className="text-center text-4xl pt-4 font-bold ">Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline bg-white ">Login</button>
        </div>
        {error.login && (
          <label className="label text-xs text-red-500">{error.login}</label>
        )}
      </form>
      <p className="text-center font-bold">OR</p>
      <div className="card-body py-2">
        <button
          onClick={handelGoogle}
          className="btn btn-outline bg-white"
        >
          <FcGoogle className="text-xl"/>
          Login with Google
        </button>
        {error.googleLogin && (
          <label className="label text-sm text-red-500">{error.googleLogin}</label>
        )}
      </div>
      <p className="text-center font-semibold pb-9">
        Don&apos;t have an account ?{" "}
        <Link className="text-red-500" to="/register">
          Register
        </Link>
      </p>
    </div>
   </div>
  );
};

export default Login;
