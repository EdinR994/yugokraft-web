import { CHANGE_USER } from '../actionTypes/actionTypes';

const INIT_STATE = 'candidate';

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case CHANGE_USER:
			return action.payload;
		default:
			return state;
	}
};
