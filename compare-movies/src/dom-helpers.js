import { setLocalStorageKey, getLocalStorageKey } from "./data-store";

// create a helper function that renders each movie item in the moviesArr.

// This is the format of the data we need to render to the screen.
/*  {
    "criticScore": 88,
    "audienceScore": 83,
    "domestic": 635763484,
    "genre": "comedy",
    "title": "Barbie"
  }
*/

export const renderMovies = (moviesArray) => {
  // first we'll need to store our movie array in our local storage in a variable.
  const movies = getLocalStorageKey(moviesArray);
  console.log(movies.length);

  /* iterate through the movie array and for each element which will always be an object with 
     5 properties. turn each of its properties into a list item, then add them to an unordered
     list and to finalise add them to a new div with the class .movie-item */

  for (let i = 0; i < movies.length; i++) {
    // create li items
    const li1 = document.createElement("li");
    li1.textContent = `Title: ${movies[i].title}`;
    const li2 = document.createElement("li");
    li2.textContent = `Genre: ${movies[i].genre}`;
    const li3 = document.createElement("li");
    li3.textContent = `Audience Score: ${movies[i].audienceScore}`;
    const li4 = document.createElement("li");
    li4.textContent = `Domestic: ${movies[i].domestic}`;
    const li5 = document.createElement("li");
    li5.textContent = `Critic Score: ${movies[i].criticScore}`;

    // create unordered list and add each li item inside
    const ul = document.createElement("ul");
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    // create a div and give it the class .movie-item
    const movieDiv = document.createElement("div");
    movieDiv.classList = "movie-item";

    // add unordered list to movieDiv
    movieDiv.append(ul);

    // add movieDiv to div with id movie-grid
    document.querySelector("#movie-grid").append(movieDiv);
  }
};
