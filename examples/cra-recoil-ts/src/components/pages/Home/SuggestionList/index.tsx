import React, { Suspense } from "react";
import Carousel from "react-material-ui-carousel";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSuggestionAtom, suggestionsAtom } from "store";
import { Movie } from "types";
import SuggestionCard from "./SuggestionCard";

const chunk = (elements: any[], perChunk: number) => {
  return elements.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const SuggestionList = () => {
  const suggestions = useRecoilValue(suggestionsAtom);
  const suggestionsChunked =
    (suggestions.length && chunk(suggestions, 4)) || [];

  const [selected, setSelected] = useRecoilState(selectedSuggestionAtom);

  const handleSelect = (movie: Movie) => {
    setSelected(movie);
  };

  return (
    <Suspense fallback="chargement">
      <Carousel
        stopAutoPlayOnHover
        autoPlay={false}
        navButtonsAlwaysVisible
        swipe={false}
        cycleNavigation={false}
        indicators={false}
        animation="slide"
        duration={300}
        >
        {suggestionsChunked.map((slides: Movie[], i: number) => (
          <div key={i} css={{ display: "flex" }}>
            {slides.map((movie: Movie) => {
              const { title, poster_path, id } = movie;
              return (
                <SuggestionCard
                  key={id}
                  title={{ title }}
                  img={{
                    style: {
                      background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w500/${poster_path}")`
                    },
                    className: id === selected?.id ? "selected" : "",
                    onClick: () => handleSelect(movie),
                  }}
                />
              );
            })}
          </div>
        ))}
      </Carousel>
    </Suspense>
  );
};

export default SuggestionList;
