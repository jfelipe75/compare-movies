import "./style.css";

// import data-store functions.
import { getMovie } from "./data-store";

// import dom-helper functions.
import { renderMovies } from "./dom-helpers";

// Render all movies stored in localStorage when the page loads.
window.addEventListener("DOMContentLoaded", () => {
  renderMovies("moviesArr"); // Make sure this is rendering movies from localStorage
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

  // Call getMovie() function and pass it movieData as an  argument.
  getMovie(movieData);

  // render our new movie to the page by calling renderMovies once more.
  renderMovies("moviesArr");

  // make sure to clear form input values after submission.
  movieForm.reset();
});
