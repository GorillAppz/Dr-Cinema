import { combineReducers } from 'redux';

import cinemaDetailReducer from './cinemaDetailReducer';
import cinemasReducer from './cinemasReducer';
import movieReducer from './movieReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
	cinemaDetail: cinemaDetailReducer,
	cinemas: cinemasReducer,
	movie: movieReducer,
	upcomingMovies: upcomingMoviesReducer,
	token: tokenReducer
});