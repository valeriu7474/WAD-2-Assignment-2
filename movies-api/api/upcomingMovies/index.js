import express from 'express';
import { getUpcomingMovies } from '../tmdb-api';
import upcomingMoviesModel from './upcomingMoviesModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    // getUpcomingMovies()
    // .then(movies => res.status(200).send(movies).catch(next));
    upcomingMoviesModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;