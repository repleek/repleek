import { atom } from "recoil";

export const pageState = atom<number>({
  key: "page-movie",
  default: 1,
});

export const moviesListState = atom({
  key: "movies-list",
  default: {},
});
