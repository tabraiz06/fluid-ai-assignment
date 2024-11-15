import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const API_KEY = "4cf5ef74";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}&s=Avengers`);
    const data = await response.json();
    if (data.Search) setMovies(data.Search);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const response = await fetch(`${BASE_URL}&s=${searchQuery}`);
    const data = await response.json();

    if (data.Search) setMovies(data.Search);
    setSearchQuery("");
  };

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
