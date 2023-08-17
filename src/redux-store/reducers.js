// src/store/reducers.js
import { createSlice } from '@reduxjs/toolkit';


const initialState= {
  loading: false,
  movies: [],
  genres: [],
  error: '',
}

//implementing reducer and actions using createslice()
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovieRequest: (state) => {
      state.loading = true;
      state.movies = [];
      state.genres = [];
      state.error = '';
    },
    fetchMovieSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = '';
    },
    fetchGenre: (state, action) => {
      state.loading = false;
      state.genres = action.payload;
      state.error = '';
    },
    fetchMovieFailure: (state, action) => {
      state.loading = false;
      state.movies = [];
      state.genres = [];
      state.error = action.payload;
    },
    toggleGenre: (state, action) =>{
      const genreId = action.payload;
      if (state.genres.includes(genreId)) {
        state.genres = state.genres.filter((data) => data !== genreId);
      } else {
        state.genres.push(genreId);
      }
    }
  },
});


//distructuring movieSlice.action objects to extract the action creators 
export const { fetchMovieRequest, fetchMovieSuccess, fetchMovieFailure, toggleGenre, fetchGenre } = movieSlice.actions;

export default movieSlice.reducer;
