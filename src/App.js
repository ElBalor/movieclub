import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=d6e69607";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  return (
    <div className="App">
      <h1>Movie Club</h1>
      <div className="search">
        <input
          placeholder="search for eLbalor's movies 😜"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
