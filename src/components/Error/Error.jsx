import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

import i18n from 'i18n-js';
import error from '../../assets/images/error-icon.svg';
import routes from '../../constants/routes';

/**
 * @desc UI for Error Screen
 * @param {boolean} isCongratsOpen - value for set congrats visible
 * @returns {JSX.Element}
 */
const Congrats = ({ isCongratsOpen }) => {
	const language = useSelector(({ language }) => language);
	i18n.locale = language;

	window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<section className='error__container'>
			<div className='error__form '>
				<h2 className='error__header'>{i18n.t('confirmCv.confirm-header-error')}</h2>
				<div className='error__wrapper'>
					<img src={error} className='error__image' alt={i18n.t('confirmCv.confirm-header-error')} />
					<p className='error__title'>{i18n.t('confirmCv.confirm-title-error')}</p>
					<p className='error__text'>{i18n.t('confirmCv.confirm-text-error')}</p>
				</div>
			</div>
			<Link to={routes.HOME} className='error__home' onClick={isCongratsOpen}>
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
