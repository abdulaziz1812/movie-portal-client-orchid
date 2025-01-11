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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} replace={true}></Navigate>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/featured-movies"),
      },
      {
        path: "/add-movie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/all-movie",
        element: <AllMovie></AllMovie>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`),
      },
      {
        path: "/update-movies/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
        loader: () => fetch("http://localhost:5000/favorites"),
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
        element: <div>pass</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },

  {
    path: "*",
    element: <div>error</div>,
  },
]);

export default router;
