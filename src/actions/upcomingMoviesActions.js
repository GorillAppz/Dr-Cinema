/* eslint-disable no-return-assign */
import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAllUpcomingMoviesLoad = () => ({
	type: constants.GET_UPCOMING_MOVIES
});

const getAllUpcomingMoviesSuccess = (data) => ({
	type: constants.GET_UPCOMING_MOVIES_SUCCESS,
	payload: {
		data
	}
});

const getAllUpcomingMoviesFail = () => ({
	type: constants.GET_UPCOMING_MOVIES_FAIL
});

export const getAllUpcomingMovies = () => (dispatch, getState) => {
	dispatch(getAllUpcomingMoviesLoad());
	return axios({
		url: `${config.url}/upcoming`,
		method: 'GET',
		headers: {
			'X-ACCESS-TOKEN': getState().token.data
		}
	}).then((res) => {
		// eslint-disable-next-line no-param-reassign
		res.data.map((movie) => movie.omdb = '');
		dispatch(getAllUpcomingMoviesSuccess(res.data));
	}).catch((err) => {
		console.log(err);
		dispatch(getAllUpcomingMoviesFail());
	});
};