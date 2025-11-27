import { MovieListType } from "../../config";
import { fetchMoviesData, getMovieListUrl } from "../../utils/api.utils";
import { movieGridCard } from "./grid-view/grid-list.js";
import { renderingMoviesCol } from "./grid-view/grid-list.js";
import { renderingMoviesRow } from "./row-view/row-list.js";
renderingMoviesRow

//1 traer datos del servidor
export async function getMovieListData(MovieListType){
	const fetchUrL = getMovieListUrl(MovieListType)
	let data = await fetchMoviesData(fetchUrL);
	return data.results;
}

//2 crear y añadir elementos al dom



renderingMoviesRow()

//3 eventos



