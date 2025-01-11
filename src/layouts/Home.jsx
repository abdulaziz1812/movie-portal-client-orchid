import Banner from "../Pages/Banner";
import FeaturedMovies from "../Pages/FeaturedMovies";
import TopActors from "../Pages/TopActors";
import UpcomingMovies from "../Pages/UpcomingMovies";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <FeaturedMovies></FeaturedMovies>
      </section>
      <section>
        <UpcomingMovies></UpcomingMovies>
      </section>
      <section>
        <TopActors></TopActors>
      </section>
    </div>
  );
};

export default Home;
