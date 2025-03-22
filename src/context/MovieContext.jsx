// import { data } from "autoprefixer";
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
//initial value
const initialState = { movies: [] };

//reducer function
const movieReducer = (state, action) => {
  return { movies: action.payload };
};

//create context
const MovieContext = createContext();

//movieProvider
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    const movieFetch = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?s=Avengers&apikey=46b40936"
        );
        dispatch({ payload: response.data || [] });
      } catch (error) {
        console.log(error?.message);
      }
    };
    movieFetch();
  }, []);

  //increment Function
  // const increment = () => dispatch({ type: "INCREMENT" });

  return (
    <MovieContext.Provider value={{ movies: state.movies }}>
      {children}
    </MovieContext.Provider>
  );
};

//custome hooks for consuming context
export const useMovie = () => useContext(MovieContext);
