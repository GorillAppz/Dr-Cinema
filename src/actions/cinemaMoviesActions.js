import * as constants from '../constants';

const getMoviesByCinemaIdLoad = () => ({
	type: constants.GET_CINEMA_MOVIES
});

const getMoviesByCinemaIdSuccess = (data) => ({
	type: constants.GET_CINEMA_MOVIES_SUCCESS,
	payload: {
		data
	}
});

const getMoviesByCinemaIdFail = () => ({
	type: constants.GET_CINEMA_MOVIES_FAIL
});

export const getMoviesByCinemaId = (cinemaId) => (dispatch, getState) => {
	dispatch(getMoviesByCinemaIdLoad());
	const allMovies = getState().movies.data;
	const moviesByCinemaId = allMovies.filter(
		(movie) => movie.showtimes.find((showtime) => showtime.cinema.id === cinemaId)
	);

	const moviesWithOnlySelectedCinemaShowTimes = moviesByCinemaId.map(
		(movie) => ({
			...movie,
			showtimes: movie.showtimes.find((showtime) => showtime.cinema.id === cinemaId).schedule
		})
	);
	dispatch(getMoviesByCinemaIdSuccess(moviesWithOnlySelectedCinemaShowTimes));
};