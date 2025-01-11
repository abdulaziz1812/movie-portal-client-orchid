import { useEffect, useState } from "react";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetch("upcomingMovies.json")
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.movies));
  }, []);

  return (
    <div className="pt-4">
      <div className="w-10/12 mx-auto p-6 border rounded-2xl bg-gray-200 shadow-2xl space-y-10">
        <div>
          <h2 className="text-2xl text-center font-bold mb-4">
            Upcoming Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full object-cover object-top h-96"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{movie.title}</h3>
                  <span className="space-x-1 text-gray-600">
                  <strong> Genre: </strong>
                    {movie.genre.map((genre, index) => (
                      <span
                        key={index}
                        className=" badge badge-outline bg- shadow-sm badge-sm "
                      >
                        {genre}
                      </span>
                    ))}
                  </span>
                  <p className="text-sm text-gray-600">
                    <strong>Release: </strong> {movie.releaseDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Duration: </strong>{movie.duration}
                  </p>
                  <p className="text-sm text-gray-600">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
