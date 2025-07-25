// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => {
  let result =  array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => {
    const result = array.filter(film => film.director === director)
  return result;
  }

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => {
  const moviesByDirector = getMoviesFromDirector(array, director);
  if (moviesByDirector.length === 0) return 0;
  
  const totalScore = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0);
  const average = totalScore / moviesByDirector.length;
  return Number(average.toFixed(2));
};


// Exercise 4:  Alphabetic order by title 

  
  function orderAlphabetically(array) {
    const clonedArray = [...array];
    const titles = clonedArray.map(movie => movie.title);
    const sortedTitles = titles.sort();
    return sortedTitles.slice(0, 20);
  }



// Exercise 5: Order by year, ascending

  function orderByYear(array) {
    const clonedArray = [...array];
  
    clonedArray.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year; 
      } else {
        return a.title.localeCompare(b.title); 
      }
    });
  
    return clonedArray;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filtered = movies.filter(movie => movie.genre.includes(category));

  if (filtered.length === 0) return 0;

  const totalScore = filtered.reduce((sum, movie) => sum + movie.score, 0);
  return parseFloat((totalScore / filtered.length).toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes

  function hoursToMinutes(array) {
    return array.map(movie => {
      const durationStr = movie.duration;
  
      let hours = 0;
      let minutes = 0;
  
      // Extraer horas si existen
      if (durationStr.includes('h')) {
        const hMatch = durationStr.match(/(\d+)h/);
        if (hMatch) hours = parseInt(hMatch[1]);
      }
  
      // Extraer minutos si existen
      if (durationStr.includes('min')) {
        const mMatch = durationStr.match(/(\d+)min/);
        if (mMatch) minutes = parseInt(mMatch[1]);
      }
  
      const totalMinutes = hours * 60 + minutes;
  
      // Retornar una nueva película con duración modificada
      return {
        ...movie,
        duration: totalMinutes
      };
    });
  }


// Exercise 8: Get the best film of a year


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
