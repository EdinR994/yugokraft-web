import axios from 'axios';
import { LANGUAGE, IS_LANGUAGE_LOADING } from '../actionTypes/actionTypes';

/**
 * @desc set is language loading
 * @param {boolean} payload - is language loading
 * @returns {object}
 */
export const setIsLanguageLoading = (payload) => ({
	type: IS_LANGUAGE_LOADING,
	payload,
});

/**
 * @desc get default language with using user location
 */
export const getLanguage = () => async (dispatch) => {
	dispatch(setIsLanguageLoading(true));
	const url = 'https://freegeoip.app/json/';
	const languages = ['en', 'ua', 'ru', 'de'];
	const serboCroatian = ['rs', 'me', 'cs', 'hr', 'ba'];

	try {
		const response = await axios.get(url);
		const lang = response.data.country_code.toLowerCase();
		const isLang = languages.includes(lang);
		const isSerboCroatian = serboCroatian.includes(lang);

		if (isLang) {
			dispatch(setLanguage(lang));
		} else if (isSerboCroatian) {
			dispatch(setLanguage('sh'));
		}
	} catch (error) {
		console.warn(error);
	} finally {
		dispatch(setIsLanguageLoading(false));
	}
};

/**
 * @desc set language
 * @param {string} language - selected language
 * @returns {object}
 */
export const setLanguage = (language) => ({
	type: LANGUAGE,
	language,
});
