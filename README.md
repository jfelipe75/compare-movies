# Compare-Movies

1. To start, we'll load up all our movies from localStorage and display them in a list (use a grid to display them).\*

- We're getting some default movies to start with in movie-data.json (lets copy it into our repo).To do this we're going to import our movie data directly from the browser into data-store.js. \*

- Now let us store these default movies we just imported from movie-data.json in our local storage. \*

- Create a movie section in index.html, give it a grid attribute in the style.css so that when we render our movies, they are instanly formated in a grid.\*

- Create rendering functions that retrieve current movie array from local storage and display each element in the array to our page.\*

2. Build a form that takes in the movie's title, genre, audience score, domestic, critic score. Each input on the form is required in the html. When a form is submitted the movie is added to the top of the list. \*

- Create an event listener that listens for a submit event on our movie-form and calls a getMovie() function from our data-store.js file. \*

- Create getMovie() function in data-store.js. This function should take a formData object as an argument, iterate through its properties and store them in a regular js object which then we'll push to our movie array stored in local storage. \*

3. Include 3 charts, one of them must be a bar chart that shows the movies in order of their domestic gross totals.

- Gain a good basic understing of Chart.js library. \*

- Install Chart.js dependencies using npm install chart.js. \*
