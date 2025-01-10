import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const loadedFavorites = useLoaderData();
  const [favorites, setFavorites] = useState(loadedFavorites);
  console.log(favorites);
  return (
    <div>
      <div className="w-9/12 mx-auto ">
      <div>
          <h2 className="text-center text-4xl pt-4 font-bold">All Movies</h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {favorites.map((favorite) => (
            <FavoritesCard 
            key={favorite._id} 
            favorite={favorite}
            favorites={favorites}
            setFavorites={setFavorites}
            ></FavoritesCard>
          ))}
        </div>
        {/* <div className="py-8 w-full">
          <button
            className="btn btn-outline bg-white w-full"
            onClick={handleSeeAllMovies}
          >
            See All Movies
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Favorites;
