import useSuggestionsActions from 'actions/suggestions';

import Home from './Home.ui';
import MovieList from './MovieList';
import Suggestion from './Suggestion';
import SuggestionList from './SuggestionList';

const Index = () => {
  useSuggestionsActions();

  return (
    <Home
      MovieList={{ children: <MovieList /> }}
      Suggestion={{ children: <Suggestion /> }}
      SuggestionList={{ children: <SuggestionList /> }}
    />
  );
};

export default Index;
