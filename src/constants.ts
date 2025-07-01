import { movies } from "./db";
import { loginInit, registerInit, moviesInit } from "./pages/main";
import type { Path, Pathname } from "./type";
export const REDIRECTS: Record<Path, Pathname> = {
  "/": "movies",
  "/movies": "movies",
  "/login": "login",
  "/register": "register",
  "/not-found": "not-found",
};

export const PAGES: Record<Pathname, string> = {
  login: `<div class="container">
      <h1>Login</h1>
      <form action="">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            class="form-control"
            id="email"
            placeholder="Inter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Inter your password"
          />
        </div>
        <button id="login-btn" class="btn btn-primary">Login</button>
      </form>
    </div> `,
  movies: `<div class="container">
      <div class="row">
        <div class="col-2">
          <ul class="list-group">
          </ul>
        </div>
        <div class="col-10">
          <button class="btn btn-primary mb-3">New Movie</button>
          <p>showing ${movies.length} movies in the database.</p>
          <input
            type="text"
            class="form-control my-3"
            placeholder="Search..."
          />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <ul class="pagination">
          </ul>
        </div>
      </div>
    </div> `,
  register: `<div class="container">
      <h1>Register</h1>
      <form action="">
        <div class="mb-3">
          <label for="email" class="form-label">Name</label>
          <input
            class="form-control"
            id="email"
            placeholder="Inter your Name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            class="form-control"
            id="email"
            placeholder="Inter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Inter your password"
          />
        </div>
        <button id="register-btn" class="btn btn-primary">Register</button>
      </form>
    </div> `,
  "not-found": `
    <div class="container">
    <h1>404 NOT FOUND</h1>
    <p>A knight in black armor stands on the road In his left hand a shield,in his right hand a sword He’s the keeper of broken links and lost pages And the bearer of the 404 words of the sages</p>
    </div>
    `,
};

export const LOGICS: Record<Pathname, () => void> = {
  movies: moviesInit,
  login: loginInit,
  register: registerInit,
  "not-found": () => console.log("movies logic not-found"),
};
