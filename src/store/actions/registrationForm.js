import axios from 'axios';
import i18n from 'i18n-js';
import {
	SET_COUNTRIES,
	SET_DOCUMENTS_CATEGORIES,
	SET_CANDIDATE_FORM_PAGE,
	SET_IS_ADDITIONAL_DOCS_SENDED,
	SET_IS_DOCS_LOADING,
} from '../actionTypes/actionTypes';

import { setError } from './errorHandling';

/**
 * @desc get countries list from back
 */
export const getCountries = () => async (dispatch) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/data/countries`);
		dispatch({
			type: SET_COUNTRIES,
			payload: res.data,
		});
	} catch (err) {
		console.warn(err.message);
	}
};

/**
 * @desc get documents categories list from back
 */
export const getDocumentsCategories = () => async (dispatch) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/data/categories`);
		dispatch({
			type: SET_DOCUMENTS_CATEGORIES,
			payload: res.data,
		});
	} catch (err) {
		console.warn(err.message);
	}
};

/**
 * @desc set candidate form page
 * @param {string} page - selected candidate form page
 * @returns {object}
 */
export const setCandidateFormPage = (page) => ({
	type: SET_CANDIDATE_FORM_PAGE,
	page,
});

/**
 * @desc function for set candidate to back and to redux
 * @param {object} body - candidate data
 * @returns {function(*): Promise<void>}
 */
export const setCandidate = (body) => async (dispatch) => {
	try {
		const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/candidates/save`, body);
		localStorage.setItem('yugokraftCandidateId', res.data.candidateId);
	} catch (error) {
		dispatch(setError(error.response.data.message));
	}
};

/**
 * @desc function for patch candidate to back
 * @param {object} body - candidate data
 * @returns {function(*): Promise<void>}
 */
export const setProfile = (body) => async (dispatch) => {
	try {
		await axios.post(`${process.env.REACT_APP_API_URL}/api/candidates/profile`, body);
	} catch (error) {
		dispatch(setError(error.response.data.message));
	}
};

/**
 * @desc function for set candidate documents to back
 * @param {object} body - candidate docs list
 * @param {string} candidateId - candidate id
 * @returns {function(*): Promise<void>}
 */
export const setDocuments = (body, candidateId) => async (dispatch) => {
	try {
		dispatch(setIsDocsLoading(true));
		await axios.patch(`${process.env.REACT_APP_API_URL}/api/candidates/${candidateId}/attach`, body);
		dispatch(setCandidateFormPage('congrats'));
	} catch (error) {
		dispatch(setError(i18n.t('uploadForm.failed to load document')));
	} finally {
		dispatch(setIsDocsLoading(false));
	}
};

/**
 * @desc set is additional docs sended
 * @param {boolean} payload - is additional docs sended
 * @returns {object}
 */
export const setIsAdditionalDocsSended = (payload) => ({
	type: SET_IS_ADDITIONAL_DOCS_SENDED,
	payload,
});

/**
 * @desc set is docs loading
 * @param {boolean} payload - is docs loading
 * @returns {object}
 */
export const setIsDocsLoading = (payload) => ({
	type: SET_IS_DOCS_LOADING,
	payload,
});

/**
 * @desc function for set additional docs to back
 * @param {object} body - candidate additional docs list
 * @param {string} token - token
 * @returns {function(*): Promise<void>}
 */
export const setAdditionalDocuments = (body, token) => async (dispatch) => {
	try {
		dispatch(setIsDocsLoading(true));
		await axios.post(`${process.env.REACT_APP_API_URL}/api/candidates/upload?token=${token}`, body);
		dispatch(setIsAdditionalDocsSended(true));
	} catch (error) {
		dispatch(setError(i18n.t('uploadForm.error')));
	} finally {
		dispatch(setIsDocsLoading(false));
	}
};
