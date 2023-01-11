import { NEW_EMPLOYER, GET_EMPLOYER } from '../actionTypes/actionTypes';

/**
 * @desc set new employer action
 * @param {object} data - employer data
 * @returns {object}
 */
export const setNewEmployer = (data) => ({
	type: NEW_EMPLOYER,
	payload: data,
});

/**
 * @desc get employer action
 * @returns {object}
 */
export const getEmployer = () => ({
	type: GET_EMPLOYER,
});
