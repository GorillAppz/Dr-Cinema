import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAllCinemaMoviesLoad = () => ({
	type: constants.GET_CINEMAS
});

const getAllCinemaMoviesSuccess = (data) => ({
	type: constants.GET_CINEMAS_SUCCESS,
	payload: {
		data
	}
});

const getAllCinemaMoviesFail = () => ({
	type: constants.GET_CINEMAS_FAIL
});

export const getAllCinemaMovies = (cinemaId) => (dispatch, getState) => {
	dispatch(getAllCinemaMoviesLoad());
	return axios({
		url: `${config.url}/movies`,
		method: 'GET',
		headers: {
			'X-ACCESS-TOKEN': getState().token
		}
	}).then((res) => {
		const moviesByCinemaId = res.data.filter(
			(movie) => movie.showtimes.find((showtime) => showtime.cinema.id === cinemaId)
		);

		const moviesWithOnlySelectedCinemaShowTimes = moviesByCinemaId.map((movie) => ({
			...movie,
			showtimes: movie.showtimes.find((showtime) => showtime.cinema.id === cinemaId).schedule
		}));

		dispatch(getAllCinemaMoviesSuccess(moviesWithOnlySelectedCinemaShowTimes));
	}).catch(() => {
		dispatch(getAllCinemaMoviesFail());
	});
};