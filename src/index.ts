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
