import * as constants from '../constants';

const initState = '';

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_TOKEN: {
			return payload.token;
		}
		default:
			return state;
	}
};