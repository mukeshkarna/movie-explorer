import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const API_URL = "https://www.omdbapi.com/?apikey=cfeb56a2";

const Implementations = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery) return;

      try {
        const response = await fetch(`${API_URL}&s=${searchQuery}`);
        const data = await response.json();
        setMovies(data.Search || []);

       
        setSearchHistory((prevHistory) => {
          const newHistory = [searchQuery, ...prevHistory.filter(q => q !== searchQuery)];
          localStorage.setItem("searchHistory", JSON.stringify(newHistory.slice(0, 5)));
          return newHistory.slice(0, 5);
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]); 

  return (
    <div className=" text-white flex flex-col items-center p-4">
      <h1 className="text-black text-3xl font-bold my-4">Movie Explorer</h1>
      <SearchBar onSearch={setSearchQuery} />

      
      <div className="w-full max-w-md mt-4">
        <h2 className=" bg-amber-400 text-black text-lg font-semibold mb-2">Search History</h2>
        <ul className="bg-white p-3 rounded-lg">
          {searchHistory.length > 0 ? (
            searchHistory.map((query, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-400 transition"
                onClick={() => setSearchQuery(query)}
              >
                🔍 {query}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No recent searches</p>
          )}
        </ul>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-lg"></p>
        )}
      </div>
    </div>
  );
};

export default Implementations;
