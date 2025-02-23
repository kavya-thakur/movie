import React from "react";
import countryFacts from "../api/CountryData.json";
const About = () => {
  return (
    <section className="section-about container">
      <h2 className="text-center font-bold text-2xl mt-10 mb-20">
        Here are the Interesting Facts <br />
        We're Proud of{" "}
      </h2>
      <div className="gradient-cards w-[70%] mx-auto flex  justify-between ">
        {countryFacts.map((c, i) => (
          <div className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">{c.countryName}</p>
              <p className="text-sm mb-1">
                <span className="card-description">Capital : </span>
                {c.capital}
              </p>
              <p className="">
                <span className="card-description">Population : </span>
                {c.population}
              </p>
              <p className="text-sm mb-1">
                <span className="card-description ">Interesting Fact : </span>{" "}
                {c.interestingFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
