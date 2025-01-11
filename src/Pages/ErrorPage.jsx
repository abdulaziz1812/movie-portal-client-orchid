import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-300">
        <div className="border p-6 rounded-2xl shadow-2xl bg-white">
        <h1 className="text-8xl font-bold text-red-500 mb-4 ">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link to={"/home"} className="btn btn-outline bg-white">
          Go Back to Home
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
