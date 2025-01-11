import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MovieCards from "./MovieCards";

const FeaturedMovies = () => {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div>
      <div className="py-6">
        <div className="w-10/12 mx-auto bg-gray-200 px-6 rounded-2xl shadow-2xl">
          <div>
            <h2 className="text-center text-2xl pt-4 font-bold">
              Featured Movies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
            {movies.map((movie) => (
              <MovieCards key={movie._id} movie={movie}></MovieCards>
            ))}

          </div>
            <div className="py-8 w-full">
              <Link to='/all-movie'>
              <button className="btn btn-outline bg-white w-full">
                See All Movies
              </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovies;
