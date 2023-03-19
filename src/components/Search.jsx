import React from "react";

const Search = () => {
  return (
    <form className="max-w-sm px-4 w-60  ">
      <div className="relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-32 py-2 pl-12 pr-4 text-black border border-black rounded-full  outline-none bg-[#FFFBF5] focus:w-full transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default Search;
