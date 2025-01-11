import { useState } from "react";
import Banner from "../Pages/Banner";
import FeaturedMovies from "../Pages/FeaturedMovies";
import TopActors from "../Pages/TopActors";
import UpcomingMovies from "../Pages/UpcomingMovies";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-base-100" : " bg-[#262626]"
      }`}
    >
      <div className="fixed  bg-[#262626] p-3 rounded-b-3xl transform right-2 backdrop-blur z-50">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${
              theme === "dark" ? "text-yellow-400" : "text-gray-600"
            }`}
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="theme"
            onChange={toggleTheme}
            className="toggle theme-controller "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${
              theme === "dark" ? "text-gray-400" : "text-yellow-600"
            }`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <FeaturedMovies></FeaturedMovies>
      </section>
      <section>
        <UpcomingMovies></UpcomingMovies>
      </section>
      <section>
        <TopActors></TopActors>
      </section>
    </div>
  );
};

export default Home;
