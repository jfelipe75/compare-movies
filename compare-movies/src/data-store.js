// Import default movies from the browser
import movieData from "../movie-data.json" assert { type: "json" };
console.log(movieData);

// Create local storage helper functions.
export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// save array of movies data to local storage.

setLocalStorageKey("moviesArr", movieData);
