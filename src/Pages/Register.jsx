import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUserProfile, setUser, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(email, password);

    const errors = {};
    if (!name || name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }

    const url = /^https?:\/\//;
    if (!photo || !url.test(photo)) {
      errors.photo = "Please provide a valid URL for the photo";
    }

    if (!password || !/[A-Z]/.test(password)) {
      errors.password = "Password must include at least one uppercase letter";
    }

    if (!password || !/[a-z]/.test(password)) {
      errors.password = "Password must include at least one lowercase letter.";
    }
    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    console.log(errors);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        if (result.user.uid) {
          Swal.fire({
            title: "Account created successfully ",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate(location?.state ? location.state : "/home");
        }
        updateUserProfile({ displayName: name, photoURL: photo })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        setError({ ...errors, register: error.code });
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
      <div className="w-11/12 mx-auto max-w-sm border bg-gray-200 shadow-2xl rounded-2xl ">
        <div>
          <h2 className="text-center text-4xl pt-4 font-bold">Register now</h2>
        </div>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          {error.email && (
            <label className="label text-xs text-red-500">{error.email}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo-URL"
              className="input input-bordered"
              name="photo"
            />
          </div>
          {error.photo && (
            <label className="label text-xs text-red-500">{error.photo}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
          </div>
          {error.password && (
            <label className="label text-xs text-red-500">
              {error.password}
            </label>
          )}
          
          <div className="form-control mt-6">
            <button className="btn btn-outline bg-white "> Register</button>
          </div>
          {error.register && (
            <label className="label text-sm text-red-500">
              {error.register}
            </label>
          )}
        </form>
        <p className="text-center font-bold">OR</p>
        <div className="card-body py-2">
          <button onClick={handelGoogle} className="btn btn-outline bg-white">
            <FcGoogle className="text-xl" />
            Login with Google
          </button>
          {error.googleLogin && (
            <label className="label text-sm text-red-500">
              {error.googleLogin}
            </label>
          )}
        </div>
        <p className="text-center font-semibold pb-9">
          Already have an account ?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
