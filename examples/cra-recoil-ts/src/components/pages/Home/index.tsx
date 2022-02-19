import Home from "./Home";
import SuggestionList from "./SuggestionList";
import MovieList from "./MovieList";
import Suggestion from "./Suggestion";
import { useSuggestionsActions } from "actions/suggestions";

const index = () => {
  useSuggestionsActions();

  return (
    <Home
      Suggestion={{ children: <Suggestion /> }}
      SuggestionList={{ children: <SuggestionList /> }}
      MovieList={{ children: <MovieList /> }}
    />
  );
};

export default index;
