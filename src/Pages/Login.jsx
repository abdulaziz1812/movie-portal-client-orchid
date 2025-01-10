import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const{login, setUser}=useContext(AuthContext)
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  
    const email = form.email.value;
    const password = form.password.value;
  
    console.log(email, password);
    login(email, password)
    .then(result=> {
      const user = result.user
      setUser(user)
      navigate(location?.state ? location.state : "/home");
    })
    .catch(err =>{
      setError({ ...error, login: err.code })
    })

    setError({});
  };

  return (
    <div className="w-11/12 mx-auto max-w-sm ">
      <div>
        <h2 className="text-center text-4xl pt-4 font-bold">Login</h2>
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
    </div>
  );
};

export default Login;
