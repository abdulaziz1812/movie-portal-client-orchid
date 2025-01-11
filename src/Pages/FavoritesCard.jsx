import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const FavoritesCard = ({ favorite, favorites, setFavorites }) => {
  const { _id, poster, title, duration, year, selectedGenres, rating } =
    favorite;

  const handleDelete = (id) => {
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
        fetch(`https://movie-portal-server-ashen.vercel.app/favorites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted from favorite movie list",
                icon: "success",
              });

              const remainingFavorites = favorites.filter(
                (favorite) => favorite._id !== id
              );
              setFavorites(remainingFavorites);
            }
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

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

          <button
            className="btn btn-sm btn-outline mt-4"
            onClick={() => handleDelete(_id)}
          >
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
