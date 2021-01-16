import express from 'express';
import { getNowPlayingMovies } from '../tmdb-api';
import popularMoviesModel from './popularMoviesModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    popularMoviesModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;