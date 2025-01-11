import { useContext } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const email = user?.email
  const link = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-movie">All Movies</NavLink>
      </li>
      <li>
        <NavLink to="/add-movie">Add Movie</NavLink>
      </li>
      <li>
        <NavLink to={`/favorites/${email}`}>My Favorites</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <BiMoviePlay className="text-6xl" />
          <a className="btn btn-ghost text-3xl font-anton font-extralight">
            Screen Box
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{link}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user && user?.email ? (
            <div className="flex items-center justify-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-close tooltip-left"
                  data-tip={user?.displayName || "Profile"}
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="profile"
                      src={
                        user?.photoURL ||
                        "https://img.icons8.com/?size=48&id=O9K5DaypaVKw&format=gif"
                      }
                    />
                  </div>
                </div>
              </div>
              <button 
              onClick={logOut}
              className="btn btn-sm  hover:bg-[#2b3440] hover:text-white">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn btn-sm  hover:bg-[#2b3440] hover:text-white">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm  hover:bg-[#2b3440] hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
