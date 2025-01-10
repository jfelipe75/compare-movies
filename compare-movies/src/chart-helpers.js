// Import chart.js dependencies
import Chart from "chart.js/auto";

// Import data-store functions
import { getLocalStorageKey, setLocalStorageKey } from "./data-store";

// Create a function that prepares the data for the bar chart
export const prepareBarChartData = (movieData) => {
  const chartData = {
    labels: movieData.map((movie) => movie.title),
    datasets: [
      {
        label: "Domestic Gross",
        data: movieData.map((movie) => movie.domestic),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 3,
      },
    ],
  };

  return chartData;
};

// Create a function that creates our new chart
export const createGrossBarChart = (chartInfo) => {
  new Chart(document.querySelector("#myBarChart"), {
    type: "bar", // specifies we are creating a bar chart.
    data: chartInfo, // data that feeds into the chart.
    options: {
      responsive: true, // makes the chart responsive to window size changes.
      scales: {
        x: {
          //  x-axis
          beginAtZero: true,
        },
        y: {
          // y-axis
          beginAtZero: true,
          ticks: {
            callback: (value) => {
              // add the $ sign before the value if value greater than a 100

              return `$${value.toLocaleString()}`;
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => {
              //add $ sign to tooltip value
              return `Domestic Gross: $${context.raw}`;
            },
          },
        },
        // title plugin configuration
        title: {
          display: true, // enables the title
          text: "Total Domestic Gross Revenue Per Title",
          font: {
            size: 18, // specify the font size of the title
            weight: "bold", // specify the font weight
          },
          color: "#333", // change the color of the title
          padding: {
            top: 20, // add some padding on top of the title
            bottom: 20, // add some padding below the title
          },
        },
      },
    },
  });
};

/* The first function will take current movie data as an arg 
 which is an array and iterate over it. then I'll be comparing the 
 objects inside of the movie array against an empty map object. 
 as we iterate we'll check using a conditional if statement 
 `if(movieArr[i].genre)` key already exists in the map object, 
 if it does exist then we'll set `map.genre += movieArr[i].domestic`
 and if it doesnt then we'll create a key in map with 
 `movieArr[i].genre` as the key's name and assign it the current `movieArr[i].domestic` as its value.
 */
export const totalGrossBasedOnGenre = (movieData) => {
  // create a map object
  const map = new Map();

  // Iterate over movie Data which is an arr using a for...loop
  for (let i = 0; i < movieData.length; i++) {
    // check if array element is an existing key of genresValueMap.
    if (map.has(movieData[i].genre)) {
      let domesticTotal = map.get(movieData[i].genre);
      map.set(movieData[i].genre, domesticTotal + movieData[i].domestic);
    } else {
      map.set(movieData[i].genre, movieData[i].domestic);
    }
  }
  console.log(map);

  // transfer map keys and values into array
  /* We want to structure our array in the same manner as the movie
     data storedin movie-data.json. In order to do this we'll
     initialize an empty array just before calling the forEach
     on map, where inside we'll be pushing map's key-value pairs
     in the following way `totalGenreGrossArr.push({key, value})` */
  const totalGenreGrossArr = [];
  map.forEach((value, key) =>
    totalGenreGrossArr.push({ grossTotal: value, genre: key })
  );

  console.log(totalGenreGrossArr);

  // return genreData array that we'll be passing to our prepareDoughnutChartData as an arg.
  return totalGenreGrossArr;
};

// Create a function that prepares the data for the doughnut chart
export const prepareDoughnutChartData = (genreData) => {
  // Use the predefined default colors for each genre
  const defaultColors = [
    "#A3C8E8", // Pastel Blue
    "#A8D08D", // Pastel Green
    "#F1A89B", // Pastel Orange
    "#D0A5D8", // Pastel Purple
    "#B0B6B6", // Pastel Gray
    "#F9E59B", // Pastel Yellow
    "#A8D8D0", // Pastel Teal];
  ];
  const chartData = {
    labels: genreData.map((movie) => movie.genre),
    datasets: [
      {
        label: "Genres Gross Totals",
        data: genreData.map((movie) => movie.grossTotal),
        backgroundColor: defaultColors,
        borderColor: defaultColors,
        borderWidth: 3,
      },
    ],
  };

  return chartData;
};

// Create a function that creates our new doughnut chart
export const createNewDoughnutChart = (chartInfo) => {
  new Chart(document.querySelector("#myDoughnutChart"), {
    type: "doughnut", // specifies we are creating a bar chart.
    data: chartInfo, // data that feeds into the chart.
    options: {
      responsive: true, // makes the chart responsive to window size changes.

      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => {
              //add $ sign to tooltip value and tell user if its millions or billions
              return `$${context.raw}`;
            },
          },
        },
        // title plugin configuration
        title: {
          display: true, // enables the title
          text: "Total Domestic Gross Revenue Per Genre",
          font: {
            size: 18, // specify the font size of the title
            weight: "bold", // specify the font weight
          },
          color: "#333", // change the color of the title
          padding: {
            top: 40, // add some padding on top of the title
            bottom: 20, // add some padding below the title
          },
        },
      },
    },
  });
};

// Create a function that prepares the data for the score bar chart
export const prepareScoreChartData = (movieData) => {
  const chartData = {
    labels: movieData.map((movie) => movie.title),
    datasets: [
      {
        label: "Audience Score",
        data: movieData.map((movie) => movie.audienceScore),
        backgroundColor: "rgba(51, 255, 87, 0.2)",
        borderColor: "rgba(51, 255, 87, 1)",
        borderWidth: 3,
      },
      {
        label: "Critic Score",
        data: movieData.map((movie) => movie.criticScore),
        backgroundColor: "rgba(255, 159, 51, 0.2)",
        borderColor: "rgba(255, 159, 51, 1)",
        borderWidth: 3,
      },
    ],
  };

  return chartData;
};

// Create a function that creates our new score bar chart
export const createScoreBarChart = (chartInfo) => {
  new Chart(document.querySelector("#myScoreBarChart"), {
    type: "bar", // specifies we are creating a bar chart.
    data: chartInfo, // data that feeds into the chart.
    options: {
      responsive: true, // makes the chart responsive to window size changes.
      scales: {
        x: {
          //  x-axis
          beginAtZero: true,
        },
        y: {
          // y-axis
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true, // enables the title
          text: "Audience Score vs Critics Score",
          font: {
            size: 18, // specify the font size of the title
            weight: "bold", // specify the font weight
          },
          color: "#333", // change the color of the title
          padding: {
            top: 20, // add some padding on top of the title
            bottom: 20, // add some padding below the title
          },
        },
      },
    },
  });
};
