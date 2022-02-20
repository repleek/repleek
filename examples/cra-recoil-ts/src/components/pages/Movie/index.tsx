import React from "react";
import { Rating } from "@mui/material";
import { useMovie } from "actions/movie";
import MovieView from "./Movie";

const Movie = () => {
  const movie = useMovie();
  if (!movie) return null;
  
  return (
    <MovieView
      wrapper={{
        style: {
          background: `center / cover no-repeat url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}")`,
        },
      }}
      img={{ src: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` }}
      title={{ title: movie.title }}
      overview={{ overview: movie.overview }}
      votes={{
        children: (
          <Rating
            name="size-large"
            size="large"
            readOnly
            defaultValue={movie.vote_average / 2}
            precision={0.1}
          />
        ),
      }}
      favoriteButton
    />
  );
};

export default Movie;
