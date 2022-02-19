import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getMovies } from "services/movie";
import { selectedSuggestionAtom, suggestionsAtom } from "store";

export const useSuggestionsActions = () => {
  const [suggestions, setSuggestions] = useRecoilState(suggestionsAtom);
  const setSelected = useSetRecoilState(selectedSuggestionAtom);
  useEffect(() => {
    getMovies({
      url: "discover/movie",
      method: "GET",
      params: {},
    }).then((res) => {
      if (res.length) {
        setSuggestions(res);
        setSelected(res[0]);
      }
    });
  }, []);

  return suggestions;
};
