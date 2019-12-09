import * as constants from '../constants';

const initState = { isLoading: false, error: null, data: [] };

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_UPCOMING_MOVIES: {
			return payload.movies;
		}
		default:
			return state;
	}
};