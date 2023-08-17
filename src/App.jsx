import { Provider } from 'react-redux'
import './App.css';
import MovieList from './components/MovieList/MovieList';
import GenreSelection from './components/GenreSelection/genreselection';
import store from './redux-store';

function App() {

  return (
    <Provider store ={store}>
      <div className=" min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-6">Movie Recommendation App</h1>
          <GenreSelection />
          <MovieList />
        </div>
      </div>
    </Provider>
  )
}

export default App
