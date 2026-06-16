// import logo from './logo.svg';

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import './components/header/header.css';
import './components/footer/footer.css';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVSeries />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/single" element={<SingleMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
