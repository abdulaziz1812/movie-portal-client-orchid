import { createBrowserRouter, Navigate } from "react-router-dom";
import AddMovie from "../Pages/AddMovie";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import AllMovie from "../Pages/AllMovie";
import MovieDetails from "../Pages/MovieDetails";
import UpdateMovie from "../Pages/UpdateMovie";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Favorites from "../Pages/Favorites";
import PrivateRouter from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} replace={true}></Navigate>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch("https://movie-portal-server-ashen.vercel.app/featured-movies"),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRouter>
            <AddMovie></AddMovie>,
          </PrivateRouter>
        ),
      },
      {
        path: "/all-movie",
        element: <AllMovie></AllMovie>,
        loader: () =>
          fetch("https://movie-portal-server-ashen.vercel.app/movies"),
      },
      {
        path: "/movies/:id",
        element: (
          <PrivateRouter>
            <MovieDetails></MovieDetails>,
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-ashen.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/update-movies/:id",
        element: (
          <PrivateRouter>
            <UpdateMovie></UpdateMovie>,
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-ashen.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/favorites/:email",
        element: (
          <PrivateRouter>
            <Favorites></Favorites>,
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-ashen.vercel.app/favorites?email=${params.email}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
