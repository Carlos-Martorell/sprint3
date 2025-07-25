
# 🎬 SPRINT 3 – Movie Data Processing with JavaScript & Jest

This repository is part of the IT Academy Bootcamp and corresponds to **Sprint 3**, focused on mastering JavaScript array methods and unit testing with **Jest**.

---

## 🧰 Required Software

To run and complete the project, the following tools are required:

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/) – for automated testing
- [Jest HTML Reporter](https://www.npmjs.com/package/jest-html-reporter) – to visualize test results in the browser

### 🔧 Installation

```bash
npm install
npm install --save-dev jest jest-html-reporter
```

🧪 Methodology
This sprint follows the principle of "programming to satisfy tests", where each function is implemented to pass the predefined test suite (films.spec.js). Console output is avoided in favor of test validation.
All functions are designed with:
✅ Single Responsibility Principle
✅ Readable and maintainable code
✅ Efficient use of array methods

🔀 Branch Workflow
A structured Git workflow has been followed using feature-based branches:
Branch Name	Purpose
main	Final, stable version of the sprint
developer	Active development and integration testing
feature/level1	Implementation of mandatory exercises
feature/level2	Implementation of optional exercise 7
feature/level3	Implementation of optional exercise 8

💻 Technologies Used
JavaScript (ES6)
Node.js
Jest (unit testing)
Git & GitHub (version control)

📚 Exercises Overview
✅ Level 1 – Mandatory Exercises
Function	Description
getAllDirectors(movies)	Returns an array of all directors.
getMoviesFromDirector(movies, director)	Filters movies by a given director.
moviesAverageOfDirector(movies, director)	Returns the average score of a director’s films.
orderAlphabetically(movies)	Returns the first 20 movie titles sorted alphabetically.
orderByYear(movies)	Returns movies sorted by year and title.
🧩 Level 2 – Optional (Exercise 7)
Function	Description
moviesAverageByCategory(movies, category)	Calculates average score for a specific genre.
🚀 Level 3 – Optional (Exercise 8)
Function	Description
hoursToMinutes(movies)	Converts movie duration to total minutes.
bestFilmOfYear(movies, year)	Returns the highest-rated movie of a specific year using .reduce() for optimal performance.
✅ All tests from the Jest suite have been successfully passed, including optional exercises.

Feel free to clone, explore, and test the project. Happy coding! 🎉
