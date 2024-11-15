import React, { useEffect, useState } from "react";

const API_KEY = "4cf5ef74";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieModal = ({ movie, onClose }) => {
   
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${BASE_URL}&i=${movie.imdbID}`);
      const data = await response.json();
      setDetails(data);
    };
    fetchMovieDetails();
  }, [movie]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-1/2">
        {details ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">{details.Title}</h2>
            <p className="text-sm">{details.Plot}</p>
            <p>
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p>
              <strong>Ratings:</strong> {details.imdbRating}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={onClose} className=" bg-blue-300 p-2 text-black">
          close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
