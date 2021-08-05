import {useState} from 'react';
import { MovieList } from './Components/movieList';
import { Search } from './Components/search';
import {AddMovie} from "./Components/addMovie";
import { movieData } from './Components/movieData';

function App() {
  const [movies, setMovie] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const add=(newMovie)=>{setMovie(movie=>([...movie,newMovie]))};

  return (
    <div className="App">
      <Search setSearchRating={setSearchRating} searchRating={searchRating} setSearchTitle={setSearchTitle} />
      <MovieList searchRating={searchRating} searchTitle={searchTitle} movies={movies} />
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
