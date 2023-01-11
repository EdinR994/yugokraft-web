import {
	CHANGE_DAY,
	SET_ACTIVE_HOUR,
	SET_CALENDAR,
	SET_GMT_CHANGED,
	SET_POPUP_ACTIVE,
	SET_REQUEST_ACCEPT,
	SET_TOKEN,
} from '../actionTypes/actionTypes';

const INIT_STATE = {
	day: {},
	activeHour: null,
	calendar: {},
	requestAccepted: false,
	isPopupActive: false,
	token: null,
	GMTChanged: 'Europe/Berlin',
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case CHANGE_DAY:
			return { ...state, day: action.payload };

		case SET_ACTIVE_HOUR:
			return { ...state, activeHour: action.payload };

		case SET_CALENDAR:
			return { ...state, calendar: action.payload };

		case SET_REQUEST_ACCEPT:
			return { ...state, requestAccepted: true };

		case SET_POPUP_ACTIVE:
			return { ...state, isPopupActive: action.payload };

		case SET_TOKEN:
			return { ...state, token: action.payload };

		case SET_GMT_CHANGED:
			return { ...state, GMTChanged: action.payload };

		default:
			return state;
	}
};
