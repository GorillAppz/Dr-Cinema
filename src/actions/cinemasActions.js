import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAllCinemasLoad = () => ({
	type: constants.GET_CINEMAS
});

const getAllCinemasSuccess = (data) => ({
	type: constants.GET_CINEMAS_SUCCESS,
	payload: {
		data
	}
});

const getAllCinemasFail = () => ({
	type: constants.GET_CINEMAS_FAIL
});

export const getAllCinemas = () => (dispatch, getState) => {
<<<<<<< HEAD
=======
	dispatch(getAllCinemasLoad());
>>>>>>> f5c6e2c981d75c9eadb4e9926886d3edfe9054e2
	return axios({
		url: `${config.url}/theaters`,
		method: 'GET',
		headers: {
			'X-ACCESS-TOKEN': getState().token.data
		}
	}).then((res) => {
		dispatch(getAllCinemasSuccess(res.data));
	}).catch(() => {
		dispatch(getAllCinemasFail());
	});
};