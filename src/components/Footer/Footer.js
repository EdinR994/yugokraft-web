import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import arrowDown from './images/arrowDown.svg';
import deuchFlag from './images/deuchFlag.svg';
import facebook from './images/facebook.svg';
import logo from './images/logo.svg';
import serbFlag from '../../assets/images/serbia.png';
import uaFlag from '../../assets/images/ukraine.svg';
import ruFlag from '../../assets/images/russia.svg';
import enFlag from '../../assets/images/usa.svg';
import routes from '../../constants/routes';
import * as funcsFromStore from '../../store/store';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

/**
 * @desc function for creating footer UI
 * @param {string} language - current language
 * @param {function} applyLanguage - function for set language
 * @param {string} userType - current user type
 * @returns {JSX.Element}
 */
const Footer = ({ language, applyLanguage, userType }) => {
	const languages = [
		{ label: i18n.t('languages.dutch'), value: 'de', flag: deuchFlag },
		{ label: i18n.t('languages.B/K/M/S'), value: 'sh', flag: serbFlag },
		{ label: i18n.t('languages.ukrainian'), value: 'ua', flag: uaFlag },
		{ label: i18n.t('languages.russian'), value: 'ru', flag: ruFlag },
		{ label: i18n.t('languages.english'), value: 'en', flag: enFlag },
	];

	const flagsTemplate = (option) => {
		if (!option.value) return option.label;

		return (
			<div className='footer__options'>
				<img src={option.flag} alt={option.label} />
				<span>{option.label}</span>
			</div>
		);
	};

	const makeSmoothScroll = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	return (
		<footer className='footer'>
			<section className='footer__right'>
				<div className='footer__rightSection footer__rightSectionTop'>
					<img src={logo} alt='Yugokraft' />
					<div className='footer__verticalLine' />
					<p className='footer__rightTopText'>{i18n.t('WIR-VERBINDEN-ARBEITSMÄRKTE-FÜR-SIE')}</p>
				</div>
				<div className='footer__rightSection'>
					<div className='footer__selectWrapper'>
						<div className='footer__pseudoSelect'>
							<div>
								<img src={languages.find((item) => item.value === language).flag} className='footer__flag' alt='flag' />
								{languages.find((item) => item.value === language).label}
							</div>
							{userType === 'candidate' && <img src={arrowDown} className='footer__arrow' alt='select language' />}
						</div>
						<Dropdown
							disabled={userType === 'employer'}
							value='B/K/M/S'
							itemTemplate={flagsTemplate}
							options={languages}
							onChange={(e) => {
								applyLanguage(e.target.value);
							}}
							placeholder='B/K/M/S'
						/>
					</div>
					<a href='https://www.facebook.com/YUGOKRAFT/' className='footer__social' target='_blank' rel='noopener noreferrer'>
						<img src={facebook} alt='facebook' />
					</a>
				</div>
				<div className='footer__rightSection footer__rightSectionBottom'>
					<Link onClick={makeSmoothScroll} to={routes.IMPRESSUM}>
						{i18n.t('Impressum')}
					</Link>
					<div className='footer__verticalLineSmall' />
					<Link onClick={makeSmoothScroll} to={routes.TERMS_OF_USE}>
						{i18n.t('Datenschutz')}
					</Link>
				</div>
			</section>
			<section className='footer__left'>
				<p className='footer__header'>{i18n.t('Navigation')}</p>
				<Link onClick={makeSmoothScroll} to={routes.HOME} className='footer__link'>
					{i18n.t('Home')}
				</Link>
				<Link onClick={makeSmoothScroll} to={routes.ABOUT} className='footer__link'>
					{i18n.t('About-Us')}
				</Link>

				{userType === 'candidate' && (
					<Link onClick={makeSmoothScroll} to={routes.FOR_CANDIDATES} className='footer__link'>
						{i18n.t('For-candidates')}
					</Link>
				)}

				<Link onClick={makeSmoothScroll} to={routes.APPLY_NOW} className='footer__link'>
					{i18n.t('Apply-Now')}
				</Link>
			</section>
		</footer>
	);
};

const storeFuncs = {
	applyLanguage: funcsFromStore.applyLanguage,
};

const storeData = (state) => ({
	language: state.language,
	userType: state.userType,
});

Footer.propTypes = {
	language: PropTypes.string.isRequired,
	userType: PropTypes.string.isRequired,
	applyLanguage: PropTypes.func.isRequired,
};

export default connect(storeData, storeFuncs)(Footer);
