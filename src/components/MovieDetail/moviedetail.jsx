import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetail = ({ movieId }) => {
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-40 h-60 object-cover"
        />
      </div>
      <div className="mt-2">
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Average Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
