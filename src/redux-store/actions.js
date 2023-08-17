import axios from 'axios';
import { fetchMovieRequest, fetchMovieSuccess, fetchMovieFailure, fetchGenre} from './reducers';


//Creating action creator function for an async api call to fetch movie data based on a given genreId
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWEwNTgwODlkMzlhYjgxMDJiODkyZTRjZTBhODFhMiIsInN1YiI6IjY0ZGNjMGZkYTNiNWU2MDBhY2MxZjczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jgD4X0KPhFMCBFNrbVlSweog-_MWEWbanewqmNwmSnw';
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json', // Set the Content-Type header
};

export const fetchMovies = () => async (dispatch) => {
    try {
        dispatch(fetchMovieRequest());

        const response = await axios.get('https://api.themoviedb.org/3/movie/12/recommendations',{ headers } );
        const movies = response.data.results
        console.log("movieList", movies)
        dispatch(fetchMovieSuccess(movies))
    } catch (error) {
        const errorMsg = error.message;
        dispatch(fetchMovieFailure(errorMsg))
    }
  };

  export const fetchGenres = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list',{ headers } );
        const genreList = response.data.genres
        console.log("result",genreList)
        dispatch(fetchGenre(genreList))
    } catch (error) {
        const errorMsg = error.message;
    }
  };

