import { LANGUAGE } from '../actionTypes/actionTypes';

const INIT_STATE = 'en';

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case LANGUAGE:
			return action.language;
		default:
			return state;
	}
};
