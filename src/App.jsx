import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import AppLayout from "./Components/layout/AppLayout";
import Countrydets from "./Components/layout/Countrydets";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <Countrydets />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
