import React from "react";

const MovieCard = ({ movie, onSelectMovie }) => {
  return (
    <div
      className="border p-2 rounded shadow cursor-pointer"
      onClick={() => onSelectMovie(movie)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.Title}
        className="w-full h-60 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
