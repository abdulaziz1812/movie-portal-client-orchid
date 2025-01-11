import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-4 md:p-10">
      <div className="lg:w-10/12 mx-auto  p-8 border rounded-2xl bg-gray-50 shadow-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
          About Movie Portal
        </h1>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>Movie Portal</strong> is a comprehensive platform for movie
            lovers. Whether you are searching for your next binge-worthy film or
            looking to create a curated list of your all-time favorites, we’ve
            got you covered! Dive into our vast collection and rediscover the
            joy of cinema.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            What We Offer
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-600 space-y-3">
            <li>
              Discover movies across multiple genres such as Action, Comedy,
              Drama, Sci-Fi, and more.
            </li>
            <li>
              Stay updated on the latest movie releases and top-rated films.
            </li>
            <li>
              Personalize your experience by adding movies to your favorites
              list.
            </li>
            <li>
              Secure and seamless login with Google and Email authentication.
            </li>
            <li>
              Responsive design ensures a flawless experience on all devices.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our passionate team of developers and designers is dedicated to
            building a user-friendly and engaging platform for movie
            enthusiasts. We’re constantly improving the platform based on user
            feedback and adding exciting new features.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Join Us Today!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Start your journey with Movie Portal now and explore an ever-growing
            library of cinematic gems.
          </p>
          <Link to="/register" className="btn btn-outline">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
