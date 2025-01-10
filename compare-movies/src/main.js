import "./style.css";

// import data-store functions.
import {
  getLocalStorageKey,
  getMovie,
  resetToDefaultMovies,
} from "./data-store";

// import dom-helper functions.
import { renderCharts, renderMovies } from "./dom-helpers";

// retrieve movie array from local storage.
let moviesArr = getLocalStorageKey("moviesArr");

// Render all movies stored in localStorage when the page loads.
window.addEventListener("DOMContentLoaded", () => {
  renderMovies("moviesArr"); // Make sure this is rendering movies from localStorage
  renderCharts(moviesArr);
});

/* create an event listener that listens for the submit event on our 
   movie-form */
const movieForm = document.querySelector("#movie-form");

movieForm.addEventListener("submit", (event) => {
  /* prevent form default behavior so that we can handle the submit event
     in the way we choose to*/
  event.preventDefault();

  // Create an object that contains all of the input values from the form.
  const movieData = new FormData(movieForm);
  movieData.forEach((value, key) => {
    console.log(key, value);
  });

  // Call getMovie() function and pass it movieData as an argument.
  getMovie(movieData);

  // render our new movie to the page by calling renderMovies once more.
  renderMovies("moviesArr");
  // re-render our graph which this time will include new movie item that was added to movieData by user through the form.
  moviesArr = getLocalStorageKey("moviesArr");
  renderCharts(moviesArr);

  // make sure to clear form input values after submission.
  movieForm.reset();
});

/* call resetToDefaultMovies inside of an event listener of type click attached to our 
   button element with an id of default-movies) */
document.querySelector("#default-movies").addEventListener("click", (event) => {
  // Clears our local storage content at the moment of event ocurrence.
  resetToDefaultMovies();

  /* reload page to activate our dom content loaded event listener which should render our 
     movie array which if it hasn't already been stored in our local storage then it does
     it on its own by storing our movie data in localStorage which is an array which original
     version we can find in movie-data.json file */
  location.reload();
});
