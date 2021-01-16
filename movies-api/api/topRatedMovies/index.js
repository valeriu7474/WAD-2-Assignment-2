import express from 'express';
import { getNowPlayingMovies } from '../tmdb-api';
import topRatedMoviesModel from './topRatedMoviesModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    topRatedMoviesModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;