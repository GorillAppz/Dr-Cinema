import * as constants from '../constants';

const initState = { isLoading: false, error: null, data: [] };

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_CINEMAS: {
			return { ...initState, isLoading: true };
		}
		case constants.GET_CINEMAS_SUCCESS: {
			const dataSortedAlphabetically = payload.data.sort((a, b) => a.name.localeCompare(b.name));
			return { isLoading: false, error: null, data: dataSortedAlphabetically };
		}
		case constants.GET_CINEMAS_FAIL: {
			return { ...initState, error: payload.error };
		}
		default:
			return state;
	}
};