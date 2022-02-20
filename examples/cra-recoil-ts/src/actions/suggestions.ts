import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getMovies } from "services/movie";
import { selectedSuggestionState, suggestionsState } from "store";

export const useSuggestionsActions = () => {
  const [suggestions, setSuggestions] = useRecoilState(suggestionsState);
  const setSelected = useSetRecoilState(selectedSuggestionState);
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
