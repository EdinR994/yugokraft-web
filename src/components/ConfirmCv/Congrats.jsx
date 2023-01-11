import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

import i18n from 'i18n-js';
import congrats from './images/congrats.svg';
import routes from '../../constants/routes';

/**
 * @desc UI for screen after CV confirmation success
 * @param {boolean} isCongratsOpen - value for set congrats visible
 * @returns {JSX.Element}
 */
const Congrats = ({ isCongratsOpen }) => {
	const language = useSelector(({ language }) => language);
	i18n.locale = language;

	window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<section className='congrats__container'>
			<div className='congrats__form '>
				<h2 className='congrats__header'>{i18n.t('confirmCv.confirm-header-success')}</h2>
				<div className='congrats__wrapper'>
					<img src={congrats} className='congrats__image' alt={i18n.t('Congratulations')} />
					<p className='congrats__title'>{i18n.t('confirmCv.confirm-title-success')}</p>
					<p className='congrats__text'>{i18n.t('confirmCv.confirm-text-success')}</p>
				</div>
			</div>
			<Link to={routes.HOME} className='congrats__home' onClick={isCongratsOpen}>
				{i18n.t('Home')}
			</Link>
		</section>
	);
};

Congrats.propTypes = {
	isCongratsOpen: PropTypes.func,
};

Congrats.defaultProps = {
	isCongratsOpen: undefined,
};

export default Congrats;
