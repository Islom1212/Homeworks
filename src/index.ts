import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { rootElement } from "./elements";
import type { Path } from "./type";
import { REDIRECTS, PAGES, LOGICS } from "./constants";

function getRoute() {
  const path = window.location.pathname as Path;
  const pathname = REDIRECTS[path];

  if (!pathname) {
    window.location.pathname = "/not-found";
    return;
  }

  const page = PAGES[pathname];
  return { page, pathname };
}

function init() {
  const route = getRoute();
  if (!route) return;

  rootElement.innerHTML = route.page;

  const logicFn = LOGICS[route.pathname];
  logicFn();
}

window.addEventListener("load", init);

//DESTRUCTURING OBJECT

// const person = {
//   name: "kent",
//   age: 20,
//   address: {
//     state: {
//       name: "UZB",
//       code: "+998",
//     },
//     city: "Tashkent city",
//   },
// };

// const { name, age, address } = person;
// const { state, city } = address;
// const { name: stateName, code } = state;

// console.log(name, age, address);

/**
 *   **✅
 *
 * 1.Genrelarni o'tish function nini qilish
 *
 * 2.HandlePaginationni genrelarga ulash va avtomatik ishlaydigan qilish
 *
 * 3.Search buttonnini ishlaydigan qilish
 *
 * 4.delete button qo'shish
 *
 * 5.NewMovie button nini ishlaydigan qilish
 *
 * 6.login pageni tsni qilish
 *
 * 7.register pageni tsni qilish
 *
 *
 *
 *
 */
