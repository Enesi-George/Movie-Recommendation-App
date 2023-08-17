import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres } from '../../redux-store/actions';
import { toggleGenre } from '../../redux-store/reducers';


const GenreSelection = () => {
    const dispatch = useDispatch();
    const { genres, selectedGenres } = useSelector((state) => state.movies);
    
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    useEffect(() => {
      dispatch(fetchGenres());
    }, [dispatch]);
  
    const handleGenreToggle = (genreId) => {
      dispatch(toggleGenre(genreId));
    }
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    }
  
    return (
      <div className=" container px-32 inline-block text-left w-full my-6 sm:w-auto bg-black">
        <button 
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-white font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-500"
        >
          Select Genres
          <svg xmlns="http://www.w3.org/2000/svg"  className='mt-1 pt-1' width="16" height="13" fill="currentColor"  viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
        </button>
  
        {dropdownVisible && (
          <div className="absolute z-10 mt-2 left w-56 rounded-md shadow-lg bg-inherit ring-1 ring-white ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {genres.map(genre => (
                <label key={genre.id} className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-white" role="menuitem">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    onChange={() => handleGenreToggle(genre.id)} 
                    checked={selectedGenres.includes(genre.id)} 
                  /> 
                  {genre.name}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

export default GenreSelection;














