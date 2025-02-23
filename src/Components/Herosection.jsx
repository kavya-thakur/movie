// import React from "react";
// import { BsArrowReturnRight } from "react-icons/bs";
// import ring from "../assets/ring.png";
// import web from "../assets/web.png";

// const Herosection = () => {
//   return (
//     <main>
//       <div className="mt-32 flex w-[80%] mx-auto lg:mt-[20vh] justify-center items-center ">
//         <div className="content-main text-center">
//           <h1 className=" font-bold text-5xl w-full text-purple-300 ">
//             Explore the world, One Country at a Time
//           </h1>
//           <p className="w-full capitalize mt-4 text-zinc-300 mb-8 text-sm ">
//             discover the history, culture, and beauty of every nation. sort,
//             search, filter thorugh countries to find the details you need.{" "}
//           </p>
//           <button className="capitalize mx-auto bg-purple-600 font-semibold px-8 py-2 rounded-lg hover:rounded-xl text-sm flex items-center gap-2 justify-center hover:px-6 hover:text-zinc-200 hover:ease-linear hover:duration-150">
//             start exploring <BsArrowReturnRight />
//           </button>
//         </div>
//         <img
//           className="h-[20vh] w-[10vw] bg-cover absolute left-48 rotate-x-15 -rotate-y-30 z-0"
//           src={web}
//           alt=""
//         />
//         <img
//           className="h-[20vh] w-[10vw] bg-cover absolute right-55 rotate-x-15 -rotate-y-30 z-0"
//           src={ring}
//           alt=""
//         />
//       </div>
//     </main>
//   );
// };

// export default Herosection;

import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import ring from "../assets/ring.png";
import web from "../assets/web.png";

const Herosection = () => {
  return (
    <main className="relative flex flex-col items-center justify-center w-full mt-48 p-4 lg:mt-[20vh]">
      {/* Text Content */}
      <div className="relative z-10 text-center max-w-3xl flex flex-col items-center space-y-6">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl text-purple-300">
          Explore the world, One Country at a Time
        </h1>
        <p className="text-zinc-300 text-sm md:text-base">
          Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
        </p>
        <button className="bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg hover:rounded-xl text-sm flex items-center gap-2 justify-center transition-all duration-150">
          Start Exploring <BsArrowReturnRight />
        </button>
      </div>

      {/* 3D Images Behind Text */}
      <img
        className="absolute top-10 left-5 sm:left-20 w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto transform perspective-1000 rotate-[15deg] opacity-50 z-0"
        src={web}
        alt="3D Web Icon"
      />

      <img
        className="absolute top-10 right-5 sm:right-20 w-[30%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto transform perspective-1000 rotate-[-15deg] opacity-50 z-0"
        src={ring}
        alt="3D Ring Icon"
      />
    </main>
  );
};

export default Herosection;
