import { CHANGE_USER } from '../actionTypes/actionTypes';

/**
 * @desc set type of new user
 * @param {string} user - user type
 * @returns {object}
 */
export default (user) => ({
	type: CHANGE_USER,
	payload: user,
});
