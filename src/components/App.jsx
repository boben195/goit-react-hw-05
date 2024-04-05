import Navigation from "./Navigation/Navigation";
import Loader from "./Loader/Loader";
import { Suspense, lazy } from "react";

import MovieCast from "./MovieCast/MovieCast.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));

import "./App.css";

import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
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
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
