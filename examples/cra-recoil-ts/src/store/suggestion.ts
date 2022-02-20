import { atom } from "recoil";
import { Movie } from "types";

export const suggestionsState = atom<Movie[]>({
  key: "suggestions-atom",
  default: [],
});

export const selectedSuggestionState = atom<Movie>({
  key: "selected-movie",
  default: null,
});
