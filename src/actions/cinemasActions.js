import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAllCinemasSuccess = (data) => ({
	type: constants.GET_CINEMAS,
	payload: {
		cinemas: data
	}
});

export const getAllCinemas = () => (dispatch, getState) => {
	return axios({
		url: `${config.url}/theaters`,
		method: 'GET',
		headers: {
			'X-ACCESS-TOKEN': getState().token
		}
	}).then((res) => {
		dispatch(getAllCinemasSuccess(res.data));
	}).catch((err) => {
		console.log(err);
	});
}