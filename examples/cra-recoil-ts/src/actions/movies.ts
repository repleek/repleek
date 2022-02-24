import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { getMovies } from 'services/movie';
import { moviesListState, pageState } from 'store';

const useMovies = () => {
  const [page, setPage] = useRecoilState(pageState);
  const [movies, setMovies] = useRecoilState(moviesListState);

  useEffect(() => {
    getMovies({ method: 'GET', url: 'discover/movie', params: { page } }).then(
      (res) => {
        const movieList = {};
        movieList[page] = res;
        setMovies((m) => ({ ...m, ...movieList }));
      }
    );
  }, [page]);

  const fetchMore = () => {
    setPage((p) => p + 1);
  };
  return { movies, fetchMore };
};

export default useMovies;
