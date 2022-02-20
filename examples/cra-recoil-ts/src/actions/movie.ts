import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getMovie } from "services/movie";
import { movieState } from "store";

export const useMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useRecoilState(movieState);
  useEffect(() => {
    id &&
    getMovie({ method: "GET", url: `movie/${id}` }).then((res) => {
      setMovie(res);
      });
  }, [id]);
  return movie;
};
