import { setLocalStorageKey, getLocalStorageKey } from "./data-store";

import {
  prepareBarChartData,
  createGrossBarChart,
  totalGrossBasedOnGenre,
  prepareDoughnutChartData,
  createNewDoughnutChart,
  prepareScoreChartData,
  createScoreBarChart,
} from "./chart-helpers";

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

  /* clear the inner html of movie-grid each time the function is called */
  const movieGrid = document.querySelector("#movie-grid");
  movieGrid.innerHTML = "";

  /* iterate through the movie array and for each element which will always be an object with 
     5 properties. turn each of its properties into a list item, then add them to an unordered
     list and to finalise add them to a new div with the class .movie-item */
  for (let i = 0; i < movies.length; i++) {
    // create li items
    const h3 = document.createElement("h3");
    h3.textContent = `${movies[i].title}`;
    const li1 = document.createElement("li");
    li1.textContent = `Genre: ${movies[i].genre}`;
    const li2 = document.createElement("li");
    li2.textContent = `Audience Score: ${movies[i].audienceScore}`;
    const li3 = document.createElement("li");
    li3.textContent = `Domestic Gross: $${movies[i].domestic}`;
    const li4 = document.createElement("li");
    li4.textContent = `Critic Score: ${movies[i].criticScore}`;

    // create unordered list and add each li item inside
    const ul = document.createElement("ul");
    ul.id = "movie-description";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    // create a div and give it the class .movie-item
    const movieDiv = document.createElement("div");
    movieDiv.classList = "movie-item";

    // add h3 to movieDiv
    movieDiv.append(h3);

    // add unordered list to movieDiv
    movieDiv.append(ul);

    // add movieDiv to div with id movie-grid
    movieGrid.append(movieDiv);
  }
};

// Create a function that renders our Chart.js graphs to our page.
export const renderCharts = (movieData) => {
  const graphDiv = document.querySelector("#graphs-grid");
  /* erase the inner html of the graphDiv so that each time we add a new
     movie item or reload the page  we don't get duplicate elements in the 
     page. */
  graphDiv.innerHTML = "";

  // create a canvas tag which we'll need to be able to render our charts
  const canvas = document.createElement("canvas");
  canvas.id = "myBarChart";

  // append canvas to graphDiv
  graphDiv.append(canvas);

  // prepare chart data for bar graph and create new gross bar chart.
  // This returns the data we need for our graph.
  const barChartData = prepareBarChartData(movieData);

  // call function createNewBarChart and pass it the data we want to display in our graph
  createGrossBarChart(barChartData);

  // create a canvas tag.
  const canvas2 = document.createElement("canvas");
  canvas2.id = "myScoreBarChart";

  // append canvas tag
  graphDiv.append(canvas2);

  // prepare chart data for bar graph and create new score bar chart.
  // This returns the data we need for our graph.
  const scoreBarChartData = prepareScoreChartData(movieData);

  // call function createNewBarChart and pass it the data we want to display in our graph
  createScoreBarChart(scoreBarChartData);

  // create a canvas tag.
  const canvas3 = document.createElement("canvas");
  canvas3.id = "myDoughnutChart";

  // append canvas2 graphDiv
  graphDiv.append(canvas3);

  // prepare data for new doughnut chart.
  const genreData = totalGrossBasedOnGenre(movieData);
  const doughnutChartData = prepareDoughnutChartData(genreData);

  // create doughnut graph.
  createNewDoughnutChart(doughnutChartData);

  totalGrossBasedOnGenre(movieData);
};
