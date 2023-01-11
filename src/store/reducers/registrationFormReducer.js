import {
	SET_COUNTRIES,
	SET_DOCUMENTS_CATEGORIES,
	SET_CANDIDATE_FORM_PAGE,
	SET_IS_ADDITIONAL_DOCS_SENDED,
	SET_CURRENT_CANDIDATE_DATA,
	SET_IS_DOCS_LOADING,
} from '../actionTypes/actionTypes';

const INIT_STATE = {
	countries: [],
	documentsCategories: [],
	formPage: 'personalData',
	errorFromBack: false,
	isAdditionalDocsSended: false,
	currentCandidateData: {},
	isDocsLoading: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_COUNTRIES:
			return { ...state, countries: action.payload };
		case SET_DOCUMENTS_CATEGORIES:
			return { ...state, documentsCategories: action.payload };
		case SET_CANDIDATE_FORM_PAGE:
			return { ...state, formPage: action.page };
		case SET_IS_ADDITIONAL_DOCS_SENDED:
			return { ...state, isAdditionalDocsSended: action.payload };
		case SET_CURRENT_CANDIDATE_DATA:
			return { ...state, currentCandidateData: action.payload };
		case SET_IS_DOCS_LOADING:
			return { ...state, isDocsLoading: action.payload };
		default:
			return state;
	}
};
