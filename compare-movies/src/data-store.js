// Import default movies from the browser
import movieData from "../movie-data.json" assert { type: "json" };
console.log(movieData);

// Create local storage helper functions.
export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageKey = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Set default movie data to local storage only if it's not already set
if (!localStorage.getItem("moviesArr")) {
  setLocalStorageKey("moviesArr", movieData);
}

/* Create getMovie() function in data-store.js. This function 
should take a formData object as an argument, iterate through
its properties and store them in a regular js object which 
then we'll unshift to our movie array stored in local storage.*/
export const getMovie = (formDataObj) => {
  // retrieve movie array from local storage.
  const movieArr = getLocalStorageKey("moviesArr");

  /* create new regular js obj to which we'll assign formData 
     object key-value pairs. */
  const regularMovieObj = {};
  formDataObj.forEach((value, key) => {
    regularMovieObj[key] = value;
  });
  console.log("regularMovieObj: ", regularMovieObj);

  // Now unshift the regularMovieObj to movieArr.
  movieArr.unshift(regularMovieObj);

  setLocalStorageKey("moviesArr", movieArr);
};

/* Create a function in data-store.js that resets movie data to its original
   version and import it from main */
export const resetToDefaultMovies = () => {
  localStorage.clear();
};
