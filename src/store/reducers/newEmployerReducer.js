import { NEW_EMPLOYER, GET_EMPLOYER } from '../actionTypes/actionTypes';

const INIT_STATE = {
	name: '',
	email: '',
	company: '',
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case NEW_EMPLOYER:
			return { ...action.payload };
		case GET_EMPLOYER:
			return state;
		default:
			return state;
	}
};
