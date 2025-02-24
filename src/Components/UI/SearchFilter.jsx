import React from "react";

const SearchFilter = ({ Search, setSearch }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(Search);
  };
  return (
    <section className=" ">
      <div>
        <input 
        className="w-full bg-zinc-800 rounded-md outline-0 px-4 py-2 text-sm"
          type="text"
          placeholder="Search"
          value={Search}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default SearchFilter;
