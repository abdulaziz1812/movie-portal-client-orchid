import { useEffect, useState } from "react";

const TopActors = () => {
  const [topActors, setTopActors] = useState([]);

  useEffect(() => {
    fetch("topActors.json")
      .then((res) => res.json())
      .then((data) => setTopActors(data.topActors));
  }, []);

  return (
    <div className="py-8">
      <div className="w-10/12 mx-auto p-6 border rounded-2xl bg-gray-200 shadow-2xl space-y-10">
        <h2 className="text-2xl font-bold  text-center">Top Actors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topActors.map((actor) => (
            <div
              key={actor.id}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4"
            >
              <img
                src={actor.profilePicture}
                alt={actor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{actor.name}</h3>
                <p className="text-sm text-gray-600">
                  Notable Movies: {actor.notableMovies.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  Awards: {actor.awards.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopActors;
