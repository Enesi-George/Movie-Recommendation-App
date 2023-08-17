import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres, fetchMovies } from '../../redux-store/actions';
import { toggleGenre } from '../../redux-store/reducers';

const GenreSelection = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movies);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleGenreToggle = (genreId) => {
    dispatch(toggleGenre(genreId));
  };

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setSelectedOptions(selectedValues);
    console.log("selectedOpt", selectedOptions)
  };

  const handleApplySelection = () => {
    selectedOptions.forEach((genreId) => handleGenreToggle(genreId));
    dispatch(fetchMovies(selectedOptions)); // Fetch movies based on selected genres
  };

  return (
    <div>
      <h2>Select Your Favorite Genres</h2>
      <select
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
        onDoubleClick={handleApplySelection} // Apply on double-click
        className="w-full mt-2 p-2 border rounded bg-transparent"
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleApplySelection}
      >
        Apply Selection and Search
      </button>
    </div>
  );
};

export default GenreSelection;





// import React, { useEffect } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
// import { fetchGenres} from '../../redux-store/actions';

// const GenreSelection = () => {
//   const dispatch = useDispatch();
//   const {genres} = useSelector((state) => state.movies);

//   useEffect(() => {
//     dispatch(fetchGenres());

//   }, [dispatch]);

//   const handleGenreToggle = (genreId) => {
//     dispatch(toggleGenre(genreId));

//   };

//   return (
//     <div>
//       <h2>Select Your Favorite Genres</h2>
//       {genres.map((genre) => (
//         <label key={genre.id} className="block">
//           <input
//             type="checkbox"
//             checked={genres.includes(genre)}
//             onChange={() => handleGenreToggle(genre)}
//           />
//           {genre.name}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default GenreSelection;




// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addSelectedGenre } from '../../redux-store/reducers';

// // const GenreSelection = () => {
// //   const dispatch = useDispatch();
// //   const genresList = useSelector((state) => state.movies.genres);

// //   const handleGenreSelection = (genreId) => {
// //     dispatch(addSelectedGenre(genreId));
// //   };

// //   return (
// //     <div className="mb-4 max-w-4xl mx-auto px-6">
// //       <h2 className="text-xl font-semibold mb-2">Select Movie Genres</h2>
// //       {genresList.map((genre) => (
// //         <label key={genre.id} className="block mb-2">
// //           <input
// //             type="checkbox"
// //             className="mr-2"
// //             onChange={() => handleGenreSelection(genre.id)}
// //           />
// //           {genre.name}
// //         </label>
// //       ))}
// //     </div>
// //   );
// // };

// // export default GenreSelection;
