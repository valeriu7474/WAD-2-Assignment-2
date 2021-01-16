import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';

import upcomingMoviesRouter from './api/upcomingMovies';

import nowPlayingMoviesRouter from './api/nowPlayingMovies';

import popularMoviesRouter from './api/popularMovies';

import topRatedMoviesRouter from './api/topRatedMovies';

import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadUpcomingMovies, loadNowPlayingMovies, loadPopularMovies, loadTopRatedMovies } from './seedData';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack}`)
};

const app = express();

const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());
app.use('/api/movies', moviesRouter);
app.use('/api/upcomingMovies', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
app.use('/api/nowPlayingMovies', passport.authenticate('jwt', {session: false}), nowPlayingMoviesRouter);
app.use('/api/popularMovies', passport.authenticate('jwt', {session: false}), popularMoviesRouter);
app.use('/api/topRatedMovies', passport.authenticate('jwt', {session: false}), topRatedMoviesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcomingMovies();
  loadNowPlayingMovies();
  loadPopularMovies();
  loadTopRatedMovies();
}