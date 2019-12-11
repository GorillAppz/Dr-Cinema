import * as constants from '../constants';

const initState = { isLoading: true, error: null, data: '' };

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_TOKEN_SUCCESS: {
			return { ...initState, data: payload.data, isLoading: false };
		}
		case constants.GET_TOKEN: {
			return { ...initState, isLoading: true };
		}
		default:
			return state;
	}
};