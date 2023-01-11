import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import i18n from 'i18n-js';
import MainContainer from './containers/Main';
import 'reset-css';
import routes from './constants/routes';
import * as funcsFromStore from './store/store';
import { getLanguage, setLanguage } from './store/actions/language';

function App() {
	const dispatch = useDispatch();
	const userType = useSelector((state) => state.userType);
	const language = useSelector((state) => state.language);

	useEffect(() => {
		if (userType === 'employer') {
			dispatch(setLanguage('de'));
			return;
		}
		dispatch(getLanguage());
	}, [dispatch, userType]);

	i18n.locale = userType === 'candidate' ? language : 'de';
	return (
		<BrowserRouter>
			<Route path={routes.HOME} component={MainContainer} />
		</BrowserRouter>
	);
}

const storeFuncs = {
	applyLanguage: funcsFromStore.applyLanguage,
};

const storeData = (state) => ({
	language: state.language,
});

export default connect(storeData, storeFuncs)(App);
