import React from "react";

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
    console.log(searchQuery)
  return (
    <header className="p-4 bg-gray-800 text-white">
      <h1 className="text-2xl mb-4">Movie Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className="p-2 rounded border w-1/2 text-black"
        />
        <button
          type="submit"
          className="p-2 ml-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
