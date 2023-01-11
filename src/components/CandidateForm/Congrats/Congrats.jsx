import React from 'react';
import './styles.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import congrats from '../images/congrats.svg';
import routes from '../../../constants/routes';

import { setCandidateFormPage } from '../../../store/actions/registrationForm';
import { clearCandidate, setCurrentCandidateData } from '../../../store/actions/userData';

/**
 * @desc UI for screen after registration success
 * @returns {JSX.Element}
 */
const Congrats = () => {
	const dispatch = useDispatch();
	const language = useSelector(({ language }) => language);
	i18n.locale = language;
	window.scrollTo({ top: 0, behavior: 'smooth' });

	/**
	 * @desc function for reset candidate registration form in redux
	 */
	const handleResetForm = () => {
		dispatch(clearCandidate({}));
		dispatch(setCurrentCandidateData({}));
		dispatch(setCandidateFormPage('personalData'));
	};

	return (
		<div className='congrats__container'>
			<div className='congrats__form'>
				<h2 className='congrats__header'>{i18n.t('You-have-applied-for-job')}</h2>
				<div className='congrats__wrapper'>
					<img src={congrats} className='congrats__image' alt={i18n.t('Congratulations')} />
					<p className='congrats__title'>{i18n.t('Congratulations')}</p>
					<p className='congrats__text'>{i18n.t('We-will-consider')}</p>
				</div>
			</div>
			<Link to={routes.HOME} className='congrats__home' onClick={handleResetForm}>
				{i18n.t('Home')}
			</Link>
		</div>
	);
};

export default Congrats;
