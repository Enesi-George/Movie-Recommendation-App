import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux-store/actions';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MovieDetail = ({ movieId }) => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleNavigate = ()=>{
    navigate("/")
}

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className=''>
<div>
  <button onClick={handleNavigate} className="w-24 h-12  mt-4 mx-32  text-white text-lg font-semibold rounded-lg flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-left mr-2"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </svg>
    Go Back
  </button>
</div>

    <div className="flex justify-center items-center">
      
      <div className="w-3/5 mx-auto flex p-8 pt-0 rounded-lg shadow-lg ">
        <div className="mr-6 w-2/5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
        </div>
        <div className="w-3/5">
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <p className="text-inherit">Release Date: {movie.release_date}</p>
          <p className="mt-2">{movie.overview}</p>
          <p className="text-gray-600 mt-2">Runtime: {movie.runtime} minutes</p>
          <p className="text-gray-600">Average Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetail;
