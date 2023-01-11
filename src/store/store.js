import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/userDataReducer';
import userType from './reducers/userTypeReducer';
import registrationForm from './reducers/registrationFormReducer';
import error from './reducers/errorHandlingReducer';
import language from './reducers/languageReducer';
import isLanguageLoading from './reducers/isLanguageLoadingReducer';
import newEmployer from './reducers/newEmployerReducer';
import calendar from './reducers/calendarRaducer';
import confirmCv from './reducers/confirmCvReducer';

import setUserType from './actions/userType';
import { setLanguage } from './actions/language';

const rootReducer = combineReducers({
	user,
	language,
	isLanguageLoading,
	userType,
	error,
	newEmployer,
	registrationForm,
	calendar,
	confirmCv,
});

/**
 * @desc function for changing language
 * @param {string} language
 * @param {string} userType
 */
export const applyLanguage = (language, userType) => (dispatch) => {
	if (userType === 'employer') {
		dispatch(setLanguage('de'));
		return;
	}
	dispatch(setLanguage(language));
};

/**
 * @desc function for changing user type between 'candidate' and 'employer'
 * @param {string} userType
 */
export const applyUserType = (userType) => (dispatch) => {
	dispatch(setUserType(userType));
};

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));

export default store;
