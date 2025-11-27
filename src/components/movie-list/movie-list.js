import { fetchMoviesData, getMovieListUrl } from "../../utils/api.utils";
import { secondaryNav } from "../secondary-nav/snav.js";
import { eventListeners } from "../../utils/events.js";


export async function getMovieListData(MovieListType){
	const fetchUrL = getMovieListUrl(MovieListType)
	let data = await fetchMoviesData(fetchUrL);
	return data.results;
}

secondaryNav();





