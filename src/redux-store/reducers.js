import { createSlice } from '@reduxjs/toolkit';


const initialState= {
  loading: false,
  movies: [],
  genres: [],
  error: '',
  selectedGenres: []
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
    toggleGenre: (state, action) => {
        const genreId = action.payload;
        if (state.selectedGenres.includes(genreId)) {
          state.selectedGenres = state.selectedGenres.filter(id => id !== genreId);
        } else {
          state.selectedGenres.push(genreId);
        }
      },
      clearSelectedGenres: (state) => {
        state.selectedGenres = []; 
        //this will be useful in case we decided to have button remove all cleared out all select at once.
      }
      
  },
});


//distructuring movieSlice.action objects to extract the action creators 
export const { fetchMovieRequest, fetchMovieSuccess, fetchMovieFailure, toggleGenre, fetchGenre, clearSelectedGenres } = movieSlice.actions;

export default movieSlice.reducer;
