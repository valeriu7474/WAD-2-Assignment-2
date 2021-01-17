# Assignment 2 - Movie API App

Name: Valeriu Blascu

## Overview
 + Movie API - Web App now only utilizes my movie API.
 + Pages - Web site app is protected against users who are not signed in.
 + Sign Up - Users can create an account.
 + Login - Signed in users can access routes.
 + Favourites - Users can add movies to their favourites.
 + Upcoming -  Users can see displayed upcoming movies.
 + Now Playing Users can see displayed now playing movies.
 + Top Rated - Users can see displayed top rated movies.

## Features
 
 + Feature 1 - API design
 + Feature 2 - Modelling
 + Feature 3 = Authentication and protected routes
 + Feature 4 = Mongoose
 + Feature 5 = Login System
 + Feature 6 = Login System Redesign
 + Feature 7 = Upcoming Movies
 + Feature 8 = Now Playing
 + Feature 9 = Popular
 + Feature 10 = Top Rated
 + Feature 11 = Login Page
 + Feature 12 = Sign Up Page




## API Data Model

+ http://localhost:8080/api/movies - (GET) list of movies
+ http://localhost:8080/api/movies/${id} - (GET) detailed information on a specific movie. 
+ http://localhost:8080/api/movies/${id}/reviews - (GET) movie reviews
+ http://localhost:8080/api/upcoming - (GET) upcoming movies
+ http://localhost:8080/api/nowplaying - (GET) now playing movies
+ http://localhost:8080/api/popular - (GET) popular movies
+ http://localhost:8080/api/toprated - (GET) top rated movies
+ http://localhost:8080/api/users - (GET) all users

+ http://localhost:8080/api/users - (POST) add user


## App Design
/movies/:id/reviews


### UI Design

![][cardlink]
>Shows detailed information on a movie by a card animation flip. Clicking the 'Add to favourites' button will add the movie to the favourites page.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][reviewlink]
>Shows the review for a movie. 

![][review]
>Shows the full text for a movie review. 

![][toprated]
>Shows Top Rated movies

![][upcoming]
>Shows Upcoming movies

![][popular]
>Shows popular movies

![][nowplaying]
>Shows now playing movies

## Routing

+ /login (public) - displays login page.
+ /signup (public) - displays sign up page.
+ /movies/:id (protected) - display movies page details.
+ /reviews/form (protected) - add movie review onto a specific movie.
+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (protected) - displays the full text of a movie review.
+ /movies/upcoming (protected) - displays upcoming movies.
+ /movies/nowplaying (protected) - displays now playing movies.
+ /movies/popular (protected) - displays popular movies.
+ /movies/toprated (protected) - displays top rated movies.


### Data hyperlinking

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][addfavorite]
>Clicking the 'Add to favorite' button will add that movie to the favorite page view.

![][clicklogin]
>Clicking the 'Login' button will authenticate the user and start session.

![][clicksignup]
>Clicking the 'Sign Up' button will add the user data to the database.
---------------------------------

[model]: ./data.jpg
[movieDetail]: ./moviesApp/public/moviedetail.png
[review]: ./moviesApp/public/review.png
[reviewlink]: ./moviesApp/public/reviewlink.png
[cardlink]: ./moviesApp/public/cardlink.png
[stories]: ./moviesApp/public/storybook.png
[toprated]: ./moviesApp/public/toprated.png
[upcoming]: ./moviesApp/public/upcoming.png
[popular]: ./moviesApp/public/popular.png
[nowplaying]: ./moviesApp/public/nowplaying.png
[addfavorite]: ./moviesApp/public/addfavourite.png
[clicklogin]: ./moviesApp/public/clicklogin.png
[clicksignup]: ./moviesApp/public/clicksignup.png

### References

 + Login and SignUp design inspired by  - https://codepen.io/colorlib/pen/rxddKy
