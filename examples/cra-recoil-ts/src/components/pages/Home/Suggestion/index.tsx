import React from "react";
import { useRecoilValue } from "recoil";
import { Rating } from "@mui/material";
import { selectedSuggestionState } from "store";
import Suggestion from "./Suggestion";
import dayjs from "dayjs";

const index = () => {
  const suggestion = useRecoilValue(selectedSuggestionState);
  const release_date =
    suggestion?.release_date &&
    dayjs(suggestion.release_date).format("DD MMMM YYYY");

  return suggestion ? (
    <Suggestion
      key={suggestion.id}
      suggestionBg={{
        style: {
          background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${suggestion?.backdrop_path}")`,
        },
      }}
      title={{ title: suggestion?.title }}
      release_date={{ release_date }}
      votes={{
        children: (
          <Rating
            name="size-large"
            size="large"
            readOnly
            defaultValue={suggestion.vote_average / 2}
            precision={0.1}
          />
        ),
      }}
      discover={{ href: `movie/${suggestion.id}` }}
    />
  ) : null;
};

export default index;
