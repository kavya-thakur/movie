// import React, { useEffect, useState, useTransition } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { Loader } from "../UI/Loader";
// import { getCountryindData } from "../../api/postApi";

// const Countrydets = () => {
//   const params = useParams();
//   const [isPending, startTransition] = useTransition();
//   const [country, setcountry] = useState();
//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryindData(params.id);
//       console.log(res.data[0]);
//       if (res.status === 200) {
//         setcountry(res.data[0]);
//       }
//     });
//   }, []);
//   if (isPending) return <Loader />;
//   return (
//     <section className="card country-details-card w-[70%]">
//       <div className="container-card bg-white-box">
//         {country && (
//           <div className="country-image grid grid-two-cols">
//             <img
//               src={country.flags.svg}
//               alt={country.flags.alt}
//               className="flag"
//             />
//             <div className="country-content">
//               <p className="card-title"> {country.name.official} </p>

//               <div className="infoContainer">
//                 <p>
//                   <span className="card-description"> Native Names:</span>
//                   {Object.keys(country.name.nativeName)
//                     .map((key) => country.name.nativeName[key].common)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description"> Population: </span>
//                   {country.population.toLocaleString()}
//                 </p>
//                 <p>
//                   <span className="card-description"> Region:</span>
//                   {country.region}
//                 </p>
//                 <p>
//                   <span className="card-description"> Sub Region:</span>
//                   {country.subregion}
//                 </p>
//                 <p>
//                   <span className="card-description"> Capital:</span>
//                   {country.capital}
//                 </p>

//                 <p>
//                   <span className="card-description">Top Level Domain:</span>
//                   {country.tld[0]}
//                 </p>
//                 <p>
//                   <span className="card-description"> Currencies: </span>
//                   {Object.keys(country.currencies)
//                     .map((curElem) => country.currencies[curElem].name)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description">Languages: </span>
//                   {Object.keys(country.languages)
//                     .map((key) => country.languages[key])
//                     .join(", ")}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="country-card-backBtn">
//           <NavLink to="/country" className="backBtn">
//             <button className="bg-white px-3 py-1 text-black font-normal rounded">
//               Go Back
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countrydets;

import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import { getCountryindData } from "../../api/postApi";

const Countrydets = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryindData(id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [id]);

  if (isPending) return <Loader />;

  return (
    <section className="flex flex-col items-center justify-center min-h-[70%] px-10 py-5 mt-20  text-white">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-10 md:p-10">
        {country && (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Country Flag */}
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full md:w-1/2 rounded-lg shadow-md border border-gray-700"
            />

            {/* Country Details */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                {country.name.official}
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium text-gray-400">Native Names:</span>{" "}
                  {Object.values(country.name.nativeName)
                    .map((name) => name.common)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Capital:</span> {country.capital}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Top Level Domain:</span> {country.tld[0]}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Currencies:</span>{" "}
                  {Object.values(country.currencies)
                    .map((cur) => cur.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-medium text-gray-400">Languages:</span>{" "}
                  {Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-6 text-center">
          <NavLink to="/country">
            <button className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Countrydets;
