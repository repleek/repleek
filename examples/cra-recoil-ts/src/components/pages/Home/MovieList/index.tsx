import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useMovies from 'actions/movies';
import dayjs from 'dayjs';

import MovieCard from './MovieCard.ui';
import Skeleton from './Skeleton';

const MovieList = () => {
  const { movies, fetchMore } = useMovies();
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) fetchMore();
  }, [inView]);

  return (
    <>
      {Object.values(movies)
        .flat()
        .map(({ id, poster_path, title, release_date }) => {
          const date = dayjs().isSame(release_date, 'year')
            ? dayjs(release_date).fromNow()
            : dayjs(release_date).format('DD MMMM YYYY');

          return (
            <MovieCard
              action
              img={{
                src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
                href: `movie/${id}`,
              }}
              key={id}
              release_date={{ release_date: date }}
              title={{ title }}
            />
          );
        })}
      <Skeleton ref={ref} />
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
};

export default MovieList;
