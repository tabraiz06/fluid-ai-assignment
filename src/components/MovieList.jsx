import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
};

export default MovieList;
