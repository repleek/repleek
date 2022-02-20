import React from "react";
import { useRecoilValue } from "recoil";
import { selectedSuggestionState } from "store";
import Suggestion from "./Suggestion";

const index = () => {
  const suggestion = useRecoilValue(selectedSuggestionState);
  return suggestion ? (
    <Suggestion
      key={suggestion.id}
      suggestionBg={{
        style: {
          background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${suggestion?.backdrop_path}")`,
        },
      }}
      title={{ title: suggestion?.title }}
      detail={{ detail: "USA 2021" }}
      tags={{ tags: "tag 1 | tag 2 | tag 3" }}
    />
  ) : null;
};

export default index;
