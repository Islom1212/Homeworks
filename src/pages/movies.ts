import { currentMovies, genres, movies } from "../db";
import type { Movie } from "../type";

movies.forEach((item) => {
  currentMovies.push(item);
});

const state = {
  genre: "All",
  currentPage: 1,
  pageSize: 3,
};

function renderMovies(list: Movie[]) {
  const tableBody = document.querySelector("tbody") as HTMLTableSectionElement;
  tableBody.innerHTML = "";
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
  listGroup.innerHTML = "";

  for (let genre of genres) {
    const listItem = document.createElement("li");
    if (genre.name === "All") {
      listItem.className = "list-group-item active";
    } else {
      listItem.className = "list-group-item";
    }
    listItem.textContent = genre.name;
    listGroup.append(listItem);
  }
}

function renderPagination(total: number) {
  const maxPage = Math.ceil(total / state.pageSize);
  const pagination = document.querySelector(".pagination") as HTMLUListElement;
  pagination.innerHTML = "";
  for (let page = 1; page <= maxPage; page++) {
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
      pageItem.forEach((item) => {
        item.classList.remove("active");
      });

      state.currentPage = Number(page.textContent);
      renderMovies(paginate(currentMovies, state.pageSize, state.currentPage));
      page.classList.add("active");
    });
  });
}
function handleGenres() {
  const listItems = document.querySelectorAll(
    ".list-group-item"
  ) as NodeListOf<HTMLLIElement>;

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      state.genre = item.textContent!;
      currentMovies.splice(0, currentMovies.length);

      for (let genre of genres) {
        if (state.genre === genre.name) {
          for (let movie of movies) {
            if (movie.genre.name === state.genre) {
              currentMovies.push(movie);
            } else if (state.genre === "All") {
              currentMovies.push(movie);
            }
          }
          console.log(currentMovies);
        }
      }
      renderMovies(paginate(currentMovies, state.pageSize, state.currentPage));
      renderPagination(currentMovies.length);
      handlePagination();
    });
  });
}

export const moviesInit = () => {
  const paginatedMovies = paginate(movies, state.pageSize, state.currentPage);
  renderMovies(paginatedMovies);
  renderGenres();
  renderPagination(movies.length);
  handlePagination();
  handleGenres();
};

function paginate(item: Movie[], pageSize: number, currentPage: number) {
  let startIdx = (currentPage - 1) * pageSize;
  let endIdx = startIdx + pageSize;

  return item.slice(startIdx, endIdx);
}
