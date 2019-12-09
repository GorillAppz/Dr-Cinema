import * as constants from '../constants';

const initState = { isLoading: false, error: null, data: [] };

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_CINEMA_MOVIES: {
			return { ...initState, isLoading: true };
		}
		case constants.GET_CINEMA_MOVIES_SUCCESS: {
			return { isLoading: false, error: null, data: payload.data };
		}
		case constants.GET_CINEMA_MOVIES_FAIL: {
			return { ...initState, error: payload.error };
		}
		default:
			return state;
	}
};