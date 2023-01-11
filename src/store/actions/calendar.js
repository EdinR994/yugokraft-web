import axios from 'axios';
import {
	CHANGE_DAY,
	SET_ACTIVE_HOUR,
	SET_CALENDAR,
	SET_GMT_CHANGED,
	SET_POPUP_ACTIVE,
	SET_REQUEST_ACCEPT,
	SET_TOKEN,
} from '../actionTypes/actionTypes';
import { setError } from './errorHandling';

/**
 * @desc function for controlling what day is picked in calendar
 * @param {object} payload - selected day
 * @returns {{payload: *, type: string}}
 */
export const setDay = (payload) => ({
	type: CHANGE_DAY,
	payload,
});

/**
 * @desc function for controlling what hour is picked
 * @param {string} payload - selected hour
 * @returns {{payload: *, type: string}}
 */
export const setActiveHour = (payload) => ({
	type: SET_ACTIVE_HOUR,
	payload,
});

/**
 * @desc function to put all calendar object to store
 * @param {object} payload - calendar values
 * @returns {{payload: *, type: string}}
 */
export const setCalendar = (payload) => ({
	type: SET_CALENDAR,
	payload,
});

/**
 * @desc function to changing popup status if API request accepted
 * @returns {{type: string}}
 */
export const setRequestAccept = () => ({
	type: SET_REQUEST_ACCEPT,
});

/**
 * @desc function for managing popup visibility
 * @param {boolean} payload
 * @returns {{payload: *, type: string}}
 */
export const setPopupActive = (payload) => ({
	type: SET_POPUP_ACTIVE,
	payload,
});

/**
 * @desc function for managing token from url
 * @param {string} payload - token
 * @returns {{payload: *, type: string}}
 */
export const setToken = (payload) => ({
	type: SET_TOKEN,
	payload,
});

/**
 * @desc function for changing GMT
 * @param {string} payload - selected GMT
 * @returns {{payload: *, type: string}}
 */
export const setGMTChanged = (payload) => ({
	type: SET_GMT_CHANGED,
	payload,
});

/**
 * @desc function for getting employers calendar from API
 * @param {string} token - token
 * @param {string} timezone - timezone
 */
export const getCalendar = (token, timezone) => async (dispatch) => {
	try {
		const body = { timezone };
		const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/employers/calendars/${token}`, body);
		dispatch(setCalendar(response.data));
	} catch (error) {
		dispatch(setPopupActive(true));
		dispatch(setError(error.response.data.message));
	}
};

/**
 * @desc function for acquiring chosen interview date
 * @param {object} body - chosen interview date
 */
export const acquireDate = (body) => async (dispatch) => {
	try {
		await axios.post(`${process.env.REACT_APP_API_URL}/api/employers/acquireDateForInterview`, body);
		dispatch(setPopupActive(true));
	} catch (error) {
		dispatch(setPopupActive(true));
		dispatch(setError(error.response.data.message));
	}
};
