import axios from 'axios';
import config from '../../config';
import * as constants from '../constants';

const getAccessTokenLoad = () => ({
	type: constants.GET_TOKEN
});

const getAccessTokenSuccess = (data) => ({
	type: constants.GET_TOKEN_SUCCESS,
	payload: {
		data: data.token
	}
});

const getAccessTokenFail = () => ({
	type: constants.GET_TOKEN_FAIL
});

export const getAccessToken = () => (dispatch) => {
	dispatch(getAccessTokenLoad());
	return axios({
		url: `${config.url}/authenticate`,
		method: 'POST',
		data: {
			username: config.username,
			password: config.password
		}
	}).then((res) => {
		dispatch(getAccessTokenSuccess(res.data));
	}).catch(() => {
		dispatch(getAccessTokenFail());
	});
};