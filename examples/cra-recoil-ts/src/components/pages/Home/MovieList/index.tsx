import React from "react";
import { useInView } from "react-intersection-observer";
import { useMovies } from "actions/movies";
import MovieCard from "./MovieCard";
import Skeleton from "./Skeleton";
import { useEffect } from "react";

const MovieList = () => {
  const { movies, fetchMore } = useMovies();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    inView && fetchMore();
  }, [inView]);

  return (
    <>
      {Object.values(movies)
        .flat()
        .map(({ id, poster_path }) => (
          <MovieCard
            key={id}
            img={{
              src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
              href: `movie/${id}`
            }}
            action
          />
        ))}
      <Skeleton ref={ref} />
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} />
        ))}
    </>
  );
};

export default MovieList;
