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
        loader: () => fetch("http://localhost:5000/featured-movies"),
      },
      {
        path: "/add-movie",
        element: <PrivateRouter>
          <AddMovie></AddMovie>,
        </PrivateRouter>,
      },
      {
        path: "/all-movie",
        element: <AllMovie></AllMovie>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/movies/:id",
        element: <PrivateRouter>
          <MovieDetails></MovieDetails>,
        </PrivateRouter>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`),
      },
      {
        path: "/update-movies/:id",
        element: <PrivateRouter>
          <UpdateMovie></UpdateMovie>,
        </PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`),
      },
      {
        path: "/favorites/:email",
        element: <PrivateRouter>
          <Favorites></Favorites>,
        </PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/favorites?email=${params.email}`),
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
        element: <div>about</div>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
