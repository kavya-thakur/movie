import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Country from "./Pages/Country"
import Countrydets from "./Components/layout/Countrydets"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <AppLayout />,
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
