import { IS_LANGUAGE_LOADING } from '../actionTypes/actionTypes';

const INIT_STATE = false;

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case IS_LANGUAGE_LOADING:
			return action.payload;
		default:
			return state;
	}
};
