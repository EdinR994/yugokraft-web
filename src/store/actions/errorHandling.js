import { ERROR, CLEAR_ERROR } from '../actionTypes/actionTypes';

/**
 * @desc set error action
 * @param {string} message - error message
 * @returns {object}
 */
export const setError = (message) => ({
	type: ERROR,
	message,
});

/**
 * @desc clear error action
 * @returns {object}
 */
export const clearError = () => ({
	type: CLEAR_ERROR,
	message: null,
});

/**
 * @desc apply error action
 * @param {string} error - error message
 * @return {function}
 */
export const applyError = (error) => (dispatch) => {
	dispatch(setError(error));
};
