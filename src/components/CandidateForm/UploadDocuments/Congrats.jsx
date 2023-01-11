import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../Congrats/styles.scss';

import i18n from 'i18n-js';
import congrats from '../images/congrats.svg';
import routes from '../../../constants/routes';

import { setIsAdditionalDocsSended } from '../../../store/actions/registrationForm';

/**
 * @desc function for showing success screen on documents load
 * @returns {JSX.Element}
 */
const Congrats = () => {
	const dispatch = useDispatch();
	const language = useSelector(({ language }) => language);
	i18n.locale = language;

	window.scrollTo({ top: 0, behavior: 'smooth' });

	/**
	 * @desc function for set is additional documents sended success
	 */
	const handleSetIsAdditionalDocsSended = () => {
		dispatch(setIsAdditionalDocsSended(false));
	};

	return (
		<section className='congrats__container'>
			<div className='congrats__form'>
				<div className='congrats__wrapper'>
					<img src={congrats} className='congrats__image' alt={i18n.t('Congratulations')} />
					<p className='congrats__text'>{i18n.t('uploadForm.Thank you')}</p>
				</div>
			</div>
			<Link to={routes.HOME} className='congrats__home' onClick={handleSetIsAdditionalDocsSended}>
				{i18n.t('Home')}
			</Link>
		</section>
	);
};

export default Congrats;
