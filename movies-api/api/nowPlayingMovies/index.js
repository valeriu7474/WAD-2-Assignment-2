import express from 'express';
import { getNowPlayingMovies } from '../tmdb-api';
import nowPlayingMoviesModel from './nowPlayingMoviesModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    // getUpcomingMovies()
    // .then(movies => res.status(200).send(movies).catch(next));
    nowPlayingMoviesModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;