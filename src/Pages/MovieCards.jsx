
import { FaStar } from "react-icons/fa";
import { Link, } from "react-router-dom";

const MovieCards = ({ movie}) => {
  const { _id, poster, title, duration, year, selectedGenres, rating } = movie;
 

  return (
    <div>
      <div className=" card shadow-2xl  bg-base-100 overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:bg-gray-200">
        <div>
          <img
            src={poster}
            alt={title}
            className="h-96 w-full object-cover object-top  "
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-sm text-gray-600  ">
            <strong> Genre: </strong>
            <span className="space-x-1">
              {selectedGenres.map((genre, index) => (
                <span
                  key={index}
                  className=" badge badge-outline bg- shadow-sm badge-sm "
                >
                  {genre}
                </span>
              ))}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            <strong>Duration:</strong> {duration} mins
          </div>
          <div className="text-sm text-gray-600">
            <strong>Release Year:</strong> {year}
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <strong>Rating:</strong> {rating}{" "}
            <FaStar className=" text-[#ffd700]" />
          </div>
          <Link to={`/movies/${_id}`}>
            <button className="btn btn-sm btn-outline mt-4">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
