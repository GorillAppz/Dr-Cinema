import * as constants from '../constants';

const initState = { isLoading: false, error: null, data: [] };

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_UPCOMING_MOVIES: {
			return { ...initState, isLoading: true };
		}
		case constants.GET_UPCOMING_MOVIES_SUCCESS: {
			const dataSortedDescendingDate = payload.data.sort((a, b) => a.name.localeCompare(b.name));
			console.log(dataSortedDescendingDate);
			return { isLoading: false, error: null, data: dataSortedDescendingDate };
		}
		case constants.GET_UPCOMING_MOVIES_FAIL: {
			return { ...initState, error: payload.error };
		}
		default:
			return state;
	}
};