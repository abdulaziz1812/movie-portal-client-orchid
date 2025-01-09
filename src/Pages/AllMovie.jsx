import { useLoaderData, useNavigate } from "react-router-dom";
import MovieCards from "./MovieCards";

const AllMovie = () => {
  const movies = useLoaderData();
console.log(movies);
  const navigate = useNavigate();

  const handleSeeAllMovies = () => {
    navigate("/all-movie");
  };

  return (
    <div className="w-9/12 mx-auto ">
      <div>
          <h2 className="text-center text-4xl pt-4 font-bold">All Movies</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6">
       
       {movies.map((movie) => (
          <MovieCards key={movie._id} movie={movie}></MovieCards>
        ))}
       
        
      </div>
          <div className="py-8 w-full">
          <button
            className="btn btn-outline bg-white w-full"
            onClick={handleSeeAllMovies}
          >
            See All Movies
          </button>
          </div>
          
    </div>
  );
};
export default AllMovie;
