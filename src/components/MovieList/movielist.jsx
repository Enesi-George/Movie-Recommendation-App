import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux-store/actions';

const MovieList = () => {
  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());

  }, [dispatch]);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {loading && <div className="text-center">Loading...</div>}
          {!loading && error ? (
            <div className="text-red-500">{error}</div>
          ) : null}
          {!loading && movies.length ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h3 className="text-sm font-semibold mb-2 truncate ">{movie.title}</h3>
                  {/* <h3 className="text-lg font-semibold mb-2">{movie.genre_ids}</h3> */}
                  <p className="text-gray-600 text-xs ">Release Date: {movie.release_date}</p>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
