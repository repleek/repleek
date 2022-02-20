import React from "react";
import { useMovie } from "actions/movie";

const Movie = () => {
  const movie = useMovie()
  console.log('movie: ', movie);
  return <div>Movie</div>;
};

export default Movie;
