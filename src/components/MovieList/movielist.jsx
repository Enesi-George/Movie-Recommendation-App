import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux-store/actions';
import { Link} from 'react-router-dom';


const MovieList = () => {
    const dispatch = useDispatch();
    const { loading, movies, selectedGenres, error } = useSelector((state) => state.movies);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);

  };

 
    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);
  
    useEffect(() => {
      if (selectedGenres.length === 0) {
        setFilteredMovies(movies);
      } else {
        setFilteredMovies(movies.filter(movie => movie.genre_ids.some(id => selectedGenres.includes(id))));
      }
    }, [movies, selectedGenres]);
    return (
        <div className="container px-24 mx-auto  py-10">
          <div className="max-w-7xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4">Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading && <div className="text-center col-span-full">Loading...</div>}
              {!loading && error ? (
                <div className="text-red-500 col-span-full">{error}</div>
              ) : null}
              {!loading && !filteredMovies.length ? (
                <div className="text-center col-span-full">No movies found for the selected genres.</div>
              ) : null}
              {!loading && filteredMovies.length ? (
                filteredMovies.map((movie) => (
                  <Link to={`/movie/${movie.id}`} key={movie.id} 
                  onClick={() => handleMovieClick(movie.id)} 
                  className="rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-2 truncate">{movie.title}</h3>
                      <p className="text-gray-600 text-xs">Release Date: {movie.release_date}</p>
                    </div>
                  </Link>
                ))
              ) : null}
            </div>
          </div>

        </div>
      );
    }

export default MovieList;
