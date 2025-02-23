import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ Country }) => {
  const { flags, name, population, region, capital } = Country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img className="" src={flags.svg} alt="" />
        <div className="countryInfo">
          <p className="text-xl mt-5 font-semibold mb-5">{name.common}</p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
        <button className="mt-3 px-3 py-1 text-white text-xs bg-zinc-500  rounded">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
