/* eslint-disable no-return-assign */
import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAllMoviesLoad = () => ({
	type: constants.GET_ALL_MOVIES
});

const getAllMoviesSuccess = (data) => ({
	type: constants.GET_ALL_MOVIES_SUCCESS,
	payload: {
		data
	}
});

const getAllMoviesFail = () => ({
	type: constants.GET_ALL_MOVIES_FAIL
});

export const getAllMovies = () => (dispatch, getState) => {
	dispatch(getAllMoviesLoad());
	return axios({
		url: `${config.url}/movies`,
		method: 'GET',
		headers: {
			'X-ACCESS-TOKEN': getState().token.data
		}
	}).then((res) => {
		// eslint-disable-next-line no-param-reassign
		res.data.map((movie) => movie.omdb = '');
		dispatch(getAllMoviesSuccess(res.data));
	}).catch((err) => {
		dispatch(getAllMoviesFail());
	});
};