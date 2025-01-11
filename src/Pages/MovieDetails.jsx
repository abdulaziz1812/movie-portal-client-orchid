import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  
  const movie = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    poster,
    title,
    duration,
    year,
    selectedGenres,
    rating,
    summary,
  } = movie;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
              navigate("/all-movie");
            }
          });
      }
    });
  };
  const handleFavorite = (poster,
    title,
    duration,
    year,
    selectedGenres,
    rating,
    summary) => {
    const favoriteMovie = {
      poster,
      title,
      selectedGenres,
      duration,
      year,
      rating,
      summary,
    };

    fetch(`http://localhost:5000/favorites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // const handleAddToFavorite = () => {
  //   if (!favorites.some((fav) => fav.id === movie.id)) {
  //     setFavorites([...favorites, movie]);
  //   } else {
  //     alert("Movie is already in your favorites!");
  //   }
  // };
  return (
    <div className="p-6 ">
      <div className="w-8/12 mx-auto p-6 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl text-center  font-bold mb-4 text ">
          {title.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Movie Poster */}
          <img
            src={poster}
            alt={title}
            className="w-full rounded-lg shadow-lg h-auto"
          />

          {/* Movie Details */}
          <div className="space-y-4 ">
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className=" text-gray-600  ">
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
              <div className=" text-gray-600">
                <strong>Duration:</strong> {duration} mins
              </div>
              <div className=" text-gray-600">
                <strong>Release Year:</strong> {year}
              </div>
              <div className=" text-gray-600 flex items-center gap-1">
                <strong>Rating:</strong> {rating}{" "}
                <FaStar className=" text-[#ffd700]" />
              </div>
              <div className="text-gray-600">
                <strong>Summary:</strong> {summary}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                className="btn btn-error text-white"
                onClick={() => handleDelete(_id)}
              >
                Delete Movie
              </button>
              <button
                className="btn btn-outline"
                onClick={() =>
                  handleFavorite(
                    poster,
                    title,
                    duration,
                    year,
                    selectedGenres,
                    rating,
                    summary
                  )
                }
              >
                Add to Favorite
              </button>
              <Link className="btn btn-outline" to={`/update-movies/${_id}`}>
                Update Movie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
