import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Footer } from "./components/Footer/Footer";

export const router = createBrowserRouter([

  {
    path: "/",
    element: [<Header />,  <Main/>, <Footer/>],
  },
  {
    path: "/:id",
    element: [<Header />, <MovieDetails/>, <Footer/>],
  },
]);

