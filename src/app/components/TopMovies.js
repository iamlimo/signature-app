import React from "react";

const TopMovies = () => {
  return (
    <div>
      <h2>Action and Highest-grossing Movies</h2>
      <div className="w-full overflow-x-auto whitespace-nowrap py-4 scroll-smooth hide-scrollbar">
        <div className="flex space-x-4 px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shrink-0"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
