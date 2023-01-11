import axios from 'axios';
import { SET_CONFIRM_TOKEN } from '../actionTypes/actionTypes';
import { setError } from './errorHandling';

/**
 * @desc function for set confirm token to redux
 * @param {boolean} payload - is token confirmed
 * @returns {{payload: *, type: boolean}}
 */
export const setConfirmToken = (payload) => ({
	type: SET_CONFIRM_TOKEN,
	payload,
});

/**
 * @desc function for get confirm token
 * @param {string} token - token
 */
export const getConfirmToken = (token) => async (dispatch) => {
	try {
		await axios.patch(`${process.env.REACT_APP_API_URL}/api/candidates/setExpired`, token);
		dispatch(setConfirmToken(true));
	} catch (error) {
		dispatch(setConfirmToken(false));
		dispatch(setError(error.response.data.message));
	}
};
