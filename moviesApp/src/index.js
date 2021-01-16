import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./routes/privateRoute"
import AuthProvider from "./contexts/authContext";

import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMovies';
import NowPlayingPage from "./pages/nowPlayingPage";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import SiteHeader from './components/siteHeader'
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMovies";

const App = () => {
  return (
    <BrowserRouter >
      <div className="jumbotron bgani">
      <AuthProvider>
        <SiteHeader /> 
        <div className="container-fluid ">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>  
          <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <PrivateRoute exact path="/movies/nowplaying" component={NowPlayingPage} />
          <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
          <PrivateRoute exact path="/movies/toprated" component={TopRatedMoviesPage} />
          <PrivateRoute path="/movies/:id" component={MoviePage} />

                <Route exact path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />

          <PrivateRoute path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
        </AuthProvider>
      </div>
     
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));