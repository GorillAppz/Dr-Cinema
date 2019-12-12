import { combineReducers } from 'redux';

import cinemaMovies from './cinemaMoviesReducer';
import cinemas from './cinemasReducer';
import movies from './moviesReducer';
import upcomingMovies from './upcomingMoviesReducer';
import token from './tokenReducer';

export default combineReducers({
	cinemaMovies,
	cinemas,
	movies,
	upcomingMovies,
	token
});