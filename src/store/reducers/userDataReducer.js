import { PATCH_CANDIDATE, CLEAR_CANDIDATE } from '../actionTypes/actionTypes';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case PATCH_CANDIDATE:
			return { ...state, ...action.payload };
		case CLEAR_CANDIDATE:
			return action.payload;
		default:
			return state;
	}
};
