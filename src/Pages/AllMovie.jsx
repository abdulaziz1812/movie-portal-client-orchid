import { useLoaderData } from "react-router-dom";
import MovieCards from "./MovieCards";
import { useState } from "react";

const AllMovie = () => {
  const movies = useLoaderData();
  const [search, setSearch] = useState("");
  const handelSearch = (e) => {
    e.preventDefault();
    const searchedInput = e.target.search.value;
    setSearch(searchedInput);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-6">
      <div className="w-9/12 mx-auto bg-gray-200 px-6 rounded-2xl shadow-2xl">
        <div>
          <h2 className="text-center text-xl md:text-4xl pt-4 font-bold">
            All Movies
          </h2>
        </div>

        <form onSubmit={handelSearch} className="py-4 ">
          <label className="input input-bordered flex items-center gap-2 w-full focus:ring-2 focus:ring-blue-500 ">
            <input
              type="text"
              placeholder="Search movies by title"
              className="grow "
              name="search"
            />
            <input
              type="submit"
              className="btn btn-sm btn-outline"
              value="Search"
            />
          </label>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCards key={movie._id} movie={movie}></MovieCards>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500">
              No movies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AllMovie;
