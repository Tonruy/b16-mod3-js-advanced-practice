import { renderingMoviesGrid } from "../movie-list/grid-list";
import { renderingMoviesRow } from "../movie-list/row-list";

export function secondaryNav() {

  const app = document.getElementById("app");
  const secondaryNav = document.createElement("div");
  secondaryNav.classList.add("nav-container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("container");

  //Creating of buttons
  //Grid
  const gridBtn = document.createElement("button");
  gridBtn.classList.add("btn");
  const gridImg = document.createElement("img");
  gridImg.src = "/grid-layout.svg";
  gridImg.classList.add("btn-icon");
  gridBtn.appendChild(gridImg);

  const listBtn = document.createElement("button");
  listBtn.classList.add("btn");
  const listImg = document.createElement("img");
  listImg.src = "/list-layout.svg";
  listImg.classList.add("btn-icon");
  listBtn.appendChild(listImg);

  //Appends
  innerContainer.appendChild(gridBtn);
  innerContainer.appendChild(listBtn);
  secondaryNav.appendChild(innerContainer);

  //Events
  gridBtn.addEventListener("click", () => {
    renderingMoviesGrid();
  });

  listBtn.addEventListener("click", () => {
    renderingMoviesRow();
  });

  //Final append post buttons and events
  app.appendChild(secondaryNav);
	}

