import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'


const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  
    return !("favorite" in m);
  });

  return (
    <MovieListPageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return ;
      }}
    />
  );
};

export default TopRatedMoviesPage;
