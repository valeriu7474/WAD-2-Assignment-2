import React, { useContext, useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'



const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies;

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;