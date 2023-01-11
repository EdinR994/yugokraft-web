import axios from 'axios';
import i18n from 'i18n-js';
import { PATCH_CANDIDATE, CLEAR_CANDIDATE, SET_CURRENT_CANDIDATE_DATA } from '../actionTypes/actionTypes';
import { applyError } from './errorHandling';

/**
 * @desc create new employer
 * @param {object} { name, company, email} - information about employer
 */
export const registerEmployer = ({ name, company, email }) => async (dispatch) => {
	try {
		const config = {
			header: {
				'content-type': 'application/json',
			},
		};
		const body = {
			name,
			company,
			email,
		};

		await axios.post(`${process.env.REACT_APP_API_URL}/api/employers/register`, body, config);
	} catch (err) {
		dispatch(applyError(i18n.t('employer.registration-error-message')));
	}
};

/**
 * @desc patch candidate from redux
 * @param {object} body - information about candidate
 */
export const patchCandidate = (body) => ({
	type: PATCH_CANDIDATE,
	payload: body,
});

/**
 * @desc clear candidate from redux
 * @param {object} body - empty object
 */
export const clearCandidate = (body) => ({
	type: CLEAR_CANDIDATE,
	payload: body,
});

/**
 * @desc set current candidate on server
 * @param {object} body - information about candidate
 */
export const setCurrentCandidateData = (body) => ({
	type: SET_CURRENT_CANDIDATE_DATA,
	payload: body,
});
