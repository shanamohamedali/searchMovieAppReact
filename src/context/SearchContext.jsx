import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=4b9b600168c9906a4a8fd028dbbadb7c&language=en-US&page=4&include_adult=false";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput) {
        fetchMovies(searchInput);
      }
       else {
        fetchMovies("movie");
       }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);
  
  console.log("searchInput", searchInput);

  const fetchMovies = async (query) => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: query,
        },
      });
      setSearchList(response.data.results);
      console.log("....", searchList);
      console.log("response...", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput("");
    cl
  };
  return (
    <SearchContext.Provider
      value={{ searchInput, searchList, handleChange, clearSearch,fetchMovies }}
    >
      {children}
    </SearchContext.Provider>
  );
};
