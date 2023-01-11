import { ERROR, CLEAR_ERROR } from '../actionTypes/actionTypes';

const INIT_STATE = { message: null };

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case ERROR:
			if (action.message?.split(' ')?.reverse()[0] === '400') {
				return { message: action.message };
			}

			return { message: action.message };
		case CLEAR_ERROR:
			return { message: null };
		default:
			return state;
	}
};
