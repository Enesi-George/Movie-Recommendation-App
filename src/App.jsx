import { Provider } from 'react-redux'
import './App.css';
import HomePage from './components/HomePage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/moviedetail';
import AppBar from './components/AppBar/appbar';
import store from './redux-store';

function App() {

  return (
    <Provider store={store}>
      <div className="content">
        <Router>
        <AppBar/>
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App


