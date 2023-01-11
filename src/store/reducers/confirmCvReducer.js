import { SET_CONFIRM_TOKEN } from '../actionTypes/actionTypes';

const INIT_STATE = false;

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_CONFIRM_TOKEN:
			return action.payload;

		default:
			return state;
	}
};
