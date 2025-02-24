// import React from "react";
// import { Link } from "react-router-dom";
// import { BsArrowReturnRight } from "react-icons/bs";

// const Headers = () => {
//   return (
//     <div className=" flex justify-between py-5 w-[70%] items-center mx-auto rounded-b-lg">
//       <h1 className="font-semibold text-xl">WorldAtlas</h1>
//       <div className="flex  gap-10 text-zinc-300 font-light ">
//         <Link className="hover-underline-animation" to={"/"}>
//           Home
//         </Link>
//         <Link className="hover-underline-animation" to={"/about"}>
//           About
//         </Link>
//         <Link className="hover-underline-animation" to={"/contact"}>
//           Contact
//         </Link>
//         <Link className="hover-underline-animation" to={"/country"}>
//           Country
//         </Link>
//       </div>
//       <div>
//         <button className="capitalize mx-auto bg-purple-600 font-semibold px-8 py-2 rounded-lg hover:rounded-xl text-sm flex items-center gap-2 justify-center hover:px-6 hover:text-zinc-200 hover:ease-linear hover:duration-150">
//           start exploring <BsArrowReturnRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Headers;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // Mobile menu icons

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      <nav className="bg-black flex justify-between px-8 sm:px-20 md:px-20 py-5 w-[100%] md:w-[100%] items-center mx-auto">
        {/* Logo */}
        <h1 className="font-semibold text-xl text-white">WorldAtlas</h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex gap-10 text-zinc-300 font-light">
          <Link className="hover:text-white transition" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-white transition" to={"/about"}>
            About
          </Link>
          <Link className="hover:text-white transition" to={"/contact"}>
            Contact
          </Link>
          <Link className="hover:text-white transition" to={"/country"}>
            Country
          </Link>
        </div>

        {/* CTA Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <NavLink to={`/country`} className="capitalize bg-purple-600 font-semibold px-8 py-2 rounded-lg hover:rounded-xl text-sm flex items-center gap-2 justify-center hover:text-zinc-200 transition">
            Start Exploring <BsArrowReturnRight />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className=" md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={` md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl text-white"
          onClick={() => setMenuOpen(false)}
        >
          <HiX />
        </button>

        <Link
          className="text-white text-xl"
          to={"/"}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          className="text-white text-xl"
          to={"/about"}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          className="text-white text-xl"
          to={"/contact"}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          className="text-white text-xl"
          to={"/country"}
          onClick={() => setMenuOpen(false)}
        >
          Country
        </Link>

        {/* CTA Button (Mobile) */}
        <NavLink to={`/country`} className="capitalize bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg hover:rounded-xl text-sm flex items-center gap-2 justify-center hover:px-6 transition">
          Start Exploring <BsArrowReturnRight />
        </NavLink>
      </div>
    </header>
  );
};

export default Headers;
