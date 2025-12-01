import { fetchMoviesData, getMovieListUrl } from "../../utils/api.utils";
import { renderSecondaryNav } from "../secondary-nav/snav.js";
import { renderingMoviesGrid } from "./grid-list.js";
import { renderingMoviesRow } from "./row-list.js";
import { renderMovieDetail } from "../movie-detail/movie-detail.js";

// let cos its gonna change. Main page values:
let currentCategory = "popular";
let currentView = "grid";

// Listener of the event before changing select :
document.addEventListener("categoryChange", (e) => {
  currentCategory = e.detail.category;
  updateMovies();
});

// Function for click event in case the currentView changes
export function setView(view) {
  currentView = view;
  updateMovies();
}

// Main functions
export async function updateMovies() {
  // getMovieListUrl ask for movieListType as parameter. Here the parameter is the current category
  const url = getMovieListUrl(currentCategory);
  const data = await fetchMoviesData(url);

  // new render if the event changes
  if (currentView == "grid") {
    renderingMoviesGrid(data.results);
		//data ( const data = await response.json gives back an array filled by objects so we need data.result)
		//console.log("datos:", data);
	}
	else {
		renderingMoviesRow(data.results)
	}
}

document.addEventListener("movieSelected", (e) => {
  const movieId = e.detail.id;
  renderMovieDetail(movieId);
});

document.addEventListener("backToList", () => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  renderSecondaryNav({ page: "main"});
  updateMovies();
});

//RENDER: 
// First adding Nav
renderSecondaryNav( {page: "main"});
// Rendering Movies : 
updateMovies();








