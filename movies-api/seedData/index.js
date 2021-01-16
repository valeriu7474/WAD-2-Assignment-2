import {movies} from './movies.js';
import {upcomingMovies} from './upcomingMovies.js';
import {nowPlayingMovies} from './nowPlayingMovies.js';
import {popularMovies} from './popularMovies.js';
import {topRatedMovies} from './topRatedMovies.js';

import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingMoviesModel from '../api/upcomingMovies/upcomingMoviesModel';
import nowPlayingMoviesModel from '../api/nowPlayingMovies/nowPlayingMoviesModel';
import popularMoviesModel from '../api/popularMovies/popularMoviesModel';
import topRatedMoviesModel from '../api/topRatedMovies/topRatedMoviesModel.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}


export async function loadUpcomingMovies() {
  console.log('load seed data');
  console.log(upcomingMovies.length);
  try {
    await upcomingMoviesModel.deleteMany();
    await upcomingMoviesModel.collection.insertMany(upcomingMovies);
    console.info(`${upcomingMovies.length} Upcoming Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadNowPlayingMovies() {
  console.log('load seed data');
  console.log(nowPlayingMovies.length);
  try {
    await nowPlayingMoviesModel.deleteMany();
    await nowPlayingMoviesModel.collection.insertMany(nowPlayingMovies);
    console.info(`${nowPlayingMovies.length} Now Playing Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadPopularMovies() {
  console.log('load seed data');
  console.log(popularMovies.length);
  try {
    await popularMoviesModel.deleteMany();
    await popularMoviesModel.collection.insertMany(popularMovies);
    console.info(`${popularMovies.length} Popular Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTopRatedMovies() {
  console.log('load seed data');
  console.log(topRatedMovies.length);
  try {
    await topRatedMoviesModel.deleteMany();
    await topRatedMoviesModel.collection.insertMany(topRatedMovies);
    console.info(`${topRatedMovies.length} Top Rated Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}