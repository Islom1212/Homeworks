import { genres, movies } from "../db";
import type { Movie } from "../type";

const state = {
  genre: "All",
  currentPage: 1,
  pageSize: 3,
};

function renderMovies(list: Movie[]) {
  const tableBody = document.querySelector("tbody") as HTMLTableSectionElement;
  for (let item of list) {
    const tableRow = document.createElement("tr");

    const titleTd = document.createElement("td");
    const titleLink = document.createElement("a");
    titleLink.href = `#`;
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

    tableRow.append(titleTd, genreTd, stockTd, rateTd, actionsTd);

    tableBody.append(tableRow);
  }
}

function renderGenres() {
  const listGroup = document.querySelector(".list-group") as HTMLUListElement;

  for (let genre of genres) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = genre.name;
    listGroup.append(listItem);
  }
}

function renderPagination(total: number) {
  const maxPage = Math.ceil(total / state.pageSize);
  const pagination = document.querySelector(".pagination") as HTMLUListElement;
  for (let page = 1; page < maxPage; page++) {
    const pageItem = document.createElement("li");
    pageItem.className = `page-item ${
      page === state.currentPage ? "active" : ""
    }`;

    const pageLink = document.createElement("a");
    pageLink.className = "page-link";
    pageLink.href = "#";
    pageLink.innerText = page.toString();

    pageItem.append(pageLink);
    pagination.append(pageItem);
  }
}

function handlePagination() {
  const pageItem = document.querySelectorAll(
    ".page-item"
  ) as NodeListOf<HTMLLIElement>;

  pageItem.forEach((page) => {
    page.addEventListener("click", () => {
      const tableBody = document.querySelector(
        "tbody"
      ) as HTMLTableSectionElement;
      tableBody.innerHTML = "";

      const listGroup = document.querySelector(
        ".list-group"
      ) as HTMLUListElement;
      listGroup.innerHTML = "";

      const pagination = document.querySelector(
        ".pagination"
      ) as HTMLUListElement;
      pagination.innerHTML = "";

      state.currentPage = Number(page.textContent);

      const paginatedMovies = paginate(
        movies,
        state.pageSize,
        state.currentPage
      );
      renderMovies(paginatedMovies);
      renderGenres();
      renderPagination(movies.length);
    });
  });
}

export const moviesInit = () => {
  const paginatedMovies = paginate(movies, state.pageSize, state.currentPage);
  renderMovies(paginatedMovies);
  renderGenres();
  renderPagination(movies.length);
  handlePagination();
};

function paginate(item: Movie[], pageSize: number, currentPage: number) {
  let startIdx = (currentPage - 1) * pageSize;
  let endIdx = startIdx + pageSize;

  return item.slice(startIdx, endIdx);
}
