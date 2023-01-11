import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../constants/routes';
import MainPage from '../components/MainPage/MainPage';
import AboutPage from '../components/AboutPage/AboutPage';
import ForCandidates from '../components/ForCandidatesPage/ForCandidates';
import CandidateForm from '../components/CandidateForm/CandidateFormPage';
import MainMenu from '../components/MainMenu/MainMenu';
import Footer from '../components/Footer/Footer';
import TermsOfUse from '../components/TermsOfUse/TermsOfUse';
import Impressum from '../components/Impressum/Impressum';
import * as funcsFromStore from '../store/store';
import ApplyEmployerPage from '../components/ApplyEmployerPage/ApplyEmployerPage';
import CalendarPage from '../components/CalendarPage/CalendarPage';
import AdditionalDocsPage from '../components/CandidateForm/UploadDocuments/AdditionalPage';
import ConfirmCv from '../components/ConfirmCv/ConfirmCv';

/**
 * @desc function for handling routing
 * @param {object} location - current location
 * @param {string} userType - current user type
 * @returns {JSX.Element}
 */
const MainContainer = ({ location, userType }) => {
	return (
		<>
			<MainMenu location={location} />
			<div className='pageContainer'>
				<Switch>
					<Route exact path={routes.HOME}>
						<MainPage />
					</Route>
					<Route exact path={routes.ABOUT}>
						<AboutPage />
					</Route>
					<Route exact path={routes.FOR_CANDIDATES}>
						<ForCandidates />
					</Route>
					<Route exact path={routes.APPLY_NOW}>
						{userType === 'candidate' ? <CandidateForm /> : <ApplyEmployerPage />}
					</Route>
					<Route exact path={routes.TERMS_OF_USE}>
						<TermsOfUse />
					</Route>
					<Route exact path={routes.IMPRESSUM}>
						<Impressum />
					</Route>
					<Route exact path={routes.CALENDAR}>
						<CalendarPage />
					</Route>
					<Route exact path={routes.UPLOAD_ADDITIONAL_DOCS}>
						<AdditionalDocsPage />
					</Route>
					<Route exact path={routes.CONFIRM_CV}>
						<ConfirmCv />
					</Route>
				</Switch>
				{location.pathname !== routes.CALENDAR && <Footer />}
			</div>
		</>
	);
};

const storeFuncs = {
	applyUserType: funcsFromStore.applyUserType,
};

const storeData = (state) => ({
	userType: state.userType,
});

export default connect(storeData, storeFuncs)(MainContainer);
