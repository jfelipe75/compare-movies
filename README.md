# Compare-Movies

1. To start, we'll load up all our movies from localStorage and display them in a list (use a grid to display them).\*

- We're getting some default movies to start with in movie-data.json (lets copy it into our repo).To do this we're going to import our movie data directly from the browser into data-store.js. \*

- Now let us store these default movies we just imported from movie-data.json in our local storage. \*

- Create a movie section in index.html, give it a grid attribute in the style.css so that when we render our movies, they are instanly formated in a grid.\*

- Create rendering functions that retrieve current movie array from local storage and display each element in the array to our page.\*

2. Build a form that takes in the movie's title, genre, audience score, domestic, critic score. Each input on the form is required in the html. When a form is submitted the movie is added to the top of the list. \*

- Create an event listener that listens for a submit event on our movie-form and calls a getMovie() function from our data-store.js file. \*

- Create getMovie() function in data-store.js. This function should take a formData object as an argument, iterate through its properties and store them in a regular js object which then we'll push to our movie array stored in local storage. \*

- Create a (go back to default movies) button that when clicked it resets our movie data in our local storage to its original version. (Create a function in data-store.js that resets movie data to its original version and import it from main and call it in main, inside of an event listener of type click attached to our button element with an id of default-movies). \*

3. Include 3 charts, one of them must be a bar chart that shows the movies in order of their domestic gross totals.

- Gain a good basic understing of Chart.js library. \*

- Install Chart.js dependencies using npm install chart.js. \*

- Create three charts using Chart.js. (ONE IS DONE, THERE IS TWO MORE TO GO!!!!!)

- Bar chart is complete, I also added a tooltip that displays the gross amount with a "$" before the gross amount when the user hovers over the bar element. \*\

- Create a doughnut chart now that shows the relationship between gross amount and movie genre. for this task I'm estimating that I'll have to create a total of 4 functions in order to split up the logic in an organized manner. The first function must retrieve current movie array and iterate over it. then I'll be comparing the objects inside of the movie array against an empty map object. as we iterate we'll check using a conditional if statement `if (movieArr[i].genre)` key already exists in the map object, if it does exist then we'll set `map.genre += movieArr[i].domestic` and if it doesnt then we'll create a key in map with `movieArr[i].genre` as the key's name and assign it the current `movieArr[i].domestic` as its value.
