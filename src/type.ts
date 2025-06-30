export type Pathname = "movies" | "login" | "register" | "not-found";
export type Path = `/${Pathname}` | "/";

export interface Movie {
  _id: string;
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: Genre;
}

export interface Genre {
  _id: string;
  name: string;
}
