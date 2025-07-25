
const getAllDirectors = (array) => {
  let result =  array.map((movie) => movie.director);
  return result;
}


const getMoviesFromDirector = (array, director) => {
    const result = array.filter(film => film.director === director)
  return result;
  }


const moviesAverageOfDirector = (array, director) => {
  const moviesByDirector = getMoviesFromDirector(array, director);
  if (moviesByDirector.length === 0) return 0;
  
  const totalScore = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0);
  const average = totalScore / moviesByDirector.length;
  return Number(average.toFixed(2));
};



  
  function orderAlphabetically(array) {
    const clonedArray = [...array];
    const titles = clonedArray.map(movie => movie.title);
    const sortedTitles = titles.sort();
    return sortedTitles.slice(0, 20);
  }





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


function moviesAverageByCategory(movies, category) {
  const filtered = movies.filter(movie => movie.genre.includes(category));

  if (filtered.length === 0) return 0;

  const totalScore = filtered.reduce((sum, movie) => sum + movie.score, 0);
  return parseFloat((totalScore / filtered.length).toFixed(2));
}




  function hoursToMinutes(array) {
    return array.map(movie => {
      const durationStr = movie.duration;
  
      let hours = 0;
      let minutes = 0;
  
     
      if (durationStr.includes('h')) {
        const hMatch = durationStr.match(/(\d+)h/);
        if (hMatch) hours = parseInt(hMatch[1]);
      }
  
     
      if (durationStr.includes('min')) {
        const mMatch = durationStr.match(/(\d+)min/);
        if (mMatch) minutes = parseInt(mMatch[1]);
      }
  
      const totalMinutes = hours * 60 + minutes;
  
      
      return {
        ...movie,
        duration: totalMinutes
      };
    });
  }



function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);

  if (moviesOfYear.length === 0) return [];

  const bestMovie = moviesOfYear.reduce((best, current) => {
    return current.score > best.score ? current : best;
  });

  return [bestMovie];
}



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
