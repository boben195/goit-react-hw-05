import Navigation from "./Navigation/Navigation";
import Loader from "./Loader/Loader";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieReviews from "./MovieReviews/MovieReviews.jsx";
import MovieCast from "./MovieCast/MovieCast.jsx";

import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

import "./App.css";

import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";

// import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <>
      <h1>Here we are</h1>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="review" element={<MovieReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
