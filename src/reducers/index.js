import { combineReducers } from 'redux';

import cinemaMoviesReducer from './cinemaMoviesReducer';
import cinemasReducer from './cinemasReducer';
import movieReducer from './movieReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
	cinemaMovies: cinemaMoviesReducer,
	cinemas: cinemasReducer,
	movie: movieReducer,
	upcomingMovies: upcomingMoviesReducer,
	token: tokenReducer
});