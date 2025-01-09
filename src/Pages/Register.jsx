import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate= useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
   
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        if(result.user.uid){
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
        }
        //  else {Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Already registered with this email",
        //     footer: <Link to='/login'> login here</Link>
        //   });
        // } 
        console.log(result);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
                      
            navigate(location?.state ? location.state : "/home")
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });

      form.reset();
  };

  return (
    <div className="w-11/12 mx-auto max-w-sm ">
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
            required
          />
        </div>
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
            <span className="label-text">Photo-URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo-URL"
            className="input input-bordered"
            name="photo"
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
          <button className="btn btn-primary"> Register</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
