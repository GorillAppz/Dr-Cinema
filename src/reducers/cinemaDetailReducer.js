import * as constants from '../constants';

const initState = {};

export default (state = initState, action) => {
	const { payload, type } = action;

	switch (type) {
		case constants.GET_CINEMA_DETAIL: {
			return payload.cinema;
		}
		default:
			return state;
	}
};