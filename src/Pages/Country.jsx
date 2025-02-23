// import React, { useEffect, useState, useTransition } from "react";
// import { getCountryData } from "../api/postApi";
// import CountryCard from "../Components/layout/CountryCard";
// import { Loader } from "../Components/UI/Loader";
// import SearchFilter from "../Components/UI/SearchFilter";

// const Country = () => {
//   const [isPending, startTransition] = useTransition();
//   const [countries, setcountries] = useState([]);
//   const [Search, setSearch] = useState();

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryData();
//       // console.log(res.data);
//       setcountries(res.data);
//     });
//   }, []);

//   if (isPending) return <Loader />;
//   // main logic
//   const searchCountry = (country) => {
//     if (Search) {
//       return country.name.common.toLowerCase().includes(Search.toLowerCase());
//     }
//     return countries;
//   };

//   // main logic
//   const filterCountry = countries.filter((country) => searchCountry(country));
//   return (
//     <section className="country-section w-[70%] mx-auto  ">
//       <SearchFilter Search={Search} setSearch={setSearch} />
//       <ul className="grid grid-cols-3 ">
//         {filterCountry.map((c, i) => {
//           return <CountryCard key={i} Country={c} />;
//         })}
//       </ul>
//     </section>
//   );
// };

// export default Country;
import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../Components/layout/CountryCard";
import { Loader } from "../Components/UI/Loader";
import SearchFilter from "../Components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // Search logic
  const filterCountry = countries.filter((country) =>
    search ? country.name.common.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <section className="mt-20 flex flex-col items-center justify-center w-full min-h-screen px-10 py-10">
      {/* Search Bar */}
      <div className="w-full max-w-3xl text-sm">
        <SearchFilter Search={search} setSearch={setSearch} />
      </div>

      {/* Country Grid */}
      {filterCountry.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
          {filterCountry.map((c, i) => (
            <CountryCard key={i} Country={c} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400 mt-10 text-lg">No countries found.</p>
      )}
    </section>
  );
};

export default Country;
