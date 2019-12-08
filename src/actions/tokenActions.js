import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAccessTokenSuccess = (data) => ({
	type: constants.GET_TOKEN,
	payload: {
		token: data.token
	}
});

export const getAccessToken = () => (dispatch) => {

	return axios({
		url: `${config.url}/authenticate`,
		method: 'POST',
		data: {
			username: config.username,
			password: config.password
		}
	}).then((res) => {
		dispatch(getAccessTokenSuccess(res.data));
	}).catch((err) => {

	});
}