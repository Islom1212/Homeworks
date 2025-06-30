import { movies } from "../db";
import type { Movie } from "../type";

const state = {
  genre: "All",
  currentPage: 0,
  pageSize: 3,
};

function renderMovies(list: Movie[]) {
  const tableBody = document.querySelector("tbody") as HTMLTableSectionElement;
  for (let item of list) {
    const tableRow = document.createElement("tr");

    const titleTd = document.createElement("td");
    const titleLink = document.createElement("a");
    titleLink.href = `/movies/${item._id}`;
    titleLink.textContent = item.title;
    titleTd.append(titleLink);

    const genreTd = document.createElement("td");
    genreTd.textContent = item.genre.name;

    const stockTd = document.createElement("td");
    stockTd.textContent = item.numberInStock.toString();

    const rateTd = document.createElement("td");
    rateTd.textContent = "$" + item.dailyRentalRate.toLocaleString("en-US");

    const actionsTd = document.createElement("td");
    actionsTd.textContent = "🤍";

    tableRow.append(titleTd, titleLink, genreTd, stockTd, rateTd, actionsTd);

    tableBody.append(tableRow);
  }
}

function renderGenres() {}
function renderPagination(total: number) {}

export const moviesInit = () => {
  renderMovies(movies);
  renderGenres();
  renderPagination(movies.length);
};

function paginate(item: Movie[], pageSize: number, currentPage: number) {
  let startIdx = currentPage * pageSize - pageSize;
  let endIdx = currentPage * pageSize;

  return item.slice(startIdx, endIdx);
}
