import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";


import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([

  {
    path: "/",
    element: [<Header />,  <Main/>],
  },
  {
    path: "/:id",
    element: [<Header />],
  },
]);

