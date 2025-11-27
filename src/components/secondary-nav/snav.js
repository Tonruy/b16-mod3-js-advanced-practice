import { renderingMoviesGrid } from "../movie-list/grid-view/grid-list";
import { renderingMoviesRow } from "../movie-list/row-view/row-list";
import { eventListeners } from "../../utils/events";

export function secondaryNav(){
 let currentView = "mainPage";
 const app = document.getElementById("app");
 const secondaryNav = document.createElement('div');
 secondaryNav.classList.add('nav-container')
app.appendChild(secondaryNav);

 if (currentView ==="mainPage"){




 }

}




// export function secondNav(){
// const app = document.getElementById("app");
// app.innerHTML = `
// <nav class="nav-container">
// 	<button id="grid-toggle" class="btn">
// 		<img src="/grid-layout.svg" class="btn-icon" alt="grid icon"></button>
// 	<button id="list-toggle" class="btn">
// 		<img src="/list-layout.svg" class="btn-icon" alt="list icon"></button>
// </nav>	
// <div id="content"></div>
// `
// toggleLayoutLoading();
// }







// export let currentView = "grid";

// export function toggleLayoutLoading(currentView){
// 	if (currentView === "grid"){
// 		renderingMoviesGrid();
// 	}
// 	else {
// 		currentView === "list";
// 		renderingMoviesRow();
// 	}
// }