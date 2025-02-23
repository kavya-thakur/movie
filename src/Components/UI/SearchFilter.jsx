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
        className="w-1/2 rounded-full px-4 py-2 text-sm"
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
