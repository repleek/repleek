import { atom, selector } from "recoil";
import { getMovies } from "services/movie";
import { Movie } from "types";

export const selectedSuggestion = atom<Movie>({
  key: "selectedSuggestion",
  default: undefined,
});

export const allSuggestionsState = selector<Movie[]>({
  key: "allSuggestionsState",
  get: async ({ get }) => {
    const selectedSuggestionMovie = get(selectedSuggestion);
    try {
      console.log("getMovies called...");
      /* const response: any = await getMovies();
      return response.data || []; */
    } catch (error) {
      console.error(`allSuggestionsState -> getMovies() ERROR: \n${error}`);
      return [];
    }
  },
});

/**
 * This is the atom the UI components will use to display state.
 * When `selectedSuggestion` is updated,
 * the service request in `allSuggestionsState.get()` will be called,
 * which will then update `userListState`
 * and trigger a redraw of any UI Components that
 * consume `userListState`.
 */
export const movieListState = atom<Movie[]>({
  key: "userListState",
  default: allSuggestionsState,
});
