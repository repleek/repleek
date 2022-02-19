import { atom } from "recoil";
import { Movie } from "types";

export const suggestionsAtom = atom<Movie[]>({
  key: "suggestions-atom",
  default: [],
});

export const selectedSuggestionAtom = atom<Movie>({
  key: "selected-movie",
  default: null,
});
