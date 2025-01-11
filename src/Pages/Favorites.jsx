import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FavoritesCard from "./FavoritesCard";
import { AuthContext } from "../providers/AuthProvider";

const Favorites = () => {
  const loadedFavorites = useLoaderData();
  const [favorites, setFavorites] = useState(loadedFavorites);
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.email) {
      setIsLoading(true);
      fetch(
        `https://movie-portal-server-ashen.vercel.app/favorites?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("error", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (loading || isLoading) {
    return <p>Loading favorites...</p>;
  }

  return (
    <div className="py-6">
      <div className="w-9/12 mx-auto border rounded-2xl px-6 bg-gray-200 shadow-2xl">
        <div>
          <h2 className="text-center text-xl md:text-4xl pt-4 font-bold">
            My Favorite Movies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {favorites.length === 0 ? (
            <p className=" w-full py-6 col-span-3 text-center">
              No favorites found.
            </p>
          ) : (
            favorites.map((favorite) => (
              <FavoritesCard
                key={favorite._id}
                favorite={favorite}
                favorites={favorites}
                setFavorites={setFavorites}
              ></FavoritesCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
