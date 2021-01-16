# Assignment 2 - Movie API App

Name: Valeriu Blascu

## Overview
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

+ http://localhost:3000/movies - GET list of movies
+ http://localhost:3000/movies/${id} - GET detailed information on a specific movie. 
+ http://localhost:3000/movies/${id}/reviews - GET movie reviews
+ http://localhost:3000/movies/upcoming - GET upcoming movies
+ http://localhost:3000/movies/nowplaying - GET now playing movies
+ http://localhost:3000/movies/popular - GET popular movies
+ http://localhost:3000/movies/toprated - GET top rated movies
+ http://localhost:3000/login - GET login page
+ http://localhost:3000/signup - GET sign up page
+ http://localhost:3000/movies/favorites - GET favourite movie page (PUSH)

## App Design
/movies/:id/reviews

### Component catalogue (If required)

![][stories]

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
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][addfavorite]
>Clicking the 'Add to favorite' button will add that movie to the favorite page view.

## Independent learning (If relevant)

Improved my card flip design using "transform-style" from this link.
https://www.w3schools.com/howto/howto_css_flip_card.asp

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewlink]: ./public/reviewlink.png
[cardlink]: ./public/cardlink.png
[stories]: ./public/storybook.png
[toprated]: ./public/toprated.png
[upcoming]: ./public/upcoming.png
[popular]: ./public/popular.png
[nowplaying]: ./public/nowplaying.png
[addfavorite]: ./public/addfavorite.png
