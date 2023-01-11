/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { Link, NavLink, useHistory } from 'react-router-dom';
import i18n from 'i18n-js';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import routes from '../../constants/routes';
import logoLight from '../../assets/images/logo_light.svg';
import logoDark from '../../assets/images/logo_dark.svg';
import fbLight from '../../assets/images/fb_icon.svg';
import fbDark from '../../assets/images/fb_dark_icon.svg';
import deFlag from '../../assets/images/germany.svg';
import shFlag from '../../assets/images/serbia.png';
import uaFlag from '../../assets/images/ukraine.svg';
import ruFlag from '../../assets/images/russia.svg';
import enFlag from '../../assets/images/usa.svg';
import menu from './images/menu.svg';
import menuDark from './images/menuDark.svg';
import * as funcsFromStore from '../../store/store';
import menuOpened from './images/menuOpened.svg';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import arrowDown from './images/arrowDown.svg';
import { getLanguage } from '../../store/actions/language';

/**
 * @desc function for creating UI of Main Menu in Header
 * @param {function} applyLanguage - function for set language
 * @param {string} userType - current user type
 * @param {function} applyUserType - function for set user type
 * @param {string} language - current language
 * @param {object} location - current location
 * @returns {JSX.Element}
 */
const MainMenu = ({ applyLanguage, userType, applyUserType, language, location }) => {
	const [dark, setDark] = useState(true);
	const [, setLangMenuVisible] = useState(false);
	const [displayMenuSmallScreen, setDisplayMenuSmallScreen] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const isLanguageLoading = useSelector(({ isLanguageLoading }) => isLanguageLoading);
	const flagsTemplate = (option) => {
		if (!option.value) return option.label;

		return (
			<div className='footer__options headerOptions'>
				<img src={option.flag} alt={option.label} />
				<span>{option.label}</span>
			</div>
		);
	};

	const languages = [
		{ label: i18n.t('languages.dutch'), value: 'de', flag: deFlag },
		{ label: i18n.t('languages.B/K/M/S'), value: 'sh', flag: shFlag },
		{ label: i18n.t('languages.ukrainian'), value: 'ua', flag: uaFlag },
		{ label: i18n.t('languages.russian'), value: 'ru', flag: ruFlag },
		{ label: i18n.t('languages.english'), value: 'en', flag: enFlag },
	];

	document.addEventListener('click', (e) => {
		if (
			!e.target.className.includes('langValue') &&
			!e.target.className.includes('langItem') &&
			!e.target.className.includes('langVar') &&
			!e.target.className.includes('textLight') &&
			!e.target.className.includes('langSelect') &&
			!e.target.className.includes('down')
		) {
			setTimeout(() => {
				setLangMenuVisible(false);
			}, 200);
		}
	});

	const handleUserType = async () => {
		if (userType === 'candidate') {
			applyUserType('employer');
		} else {
			await dispatch(getLanguage());
			applyUserType('candidate');
		}
		history.push('/');
	};

	const makeSmoothScroll = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	const setHref = (lang) => languages.find((item) => item.value === lang).flag;
	const setLangTitle = (lang) => languages.find((item) => item.value === lang).label;
	const setClassNameButton = () =>
		dark ? `menuButton ${displayMenuSmallScreen ? 'grayBack' : ''}` : `menuDarkButton ${displayMenuSmallScreen ? 'grayBack' : ''}`;

	return (
		<header className={`header ${dark ? 'bg_dark' : 'bg_light'}`}>
			<div className='menuContainer'>
				<div role='button' onKeyPress={() => {}} tabIndex={0} className='routeLinks' onClick={makeSmoothScroll}>
					<Link to={routes.HOME}>
						<img src={dark ? logoLight : logoDark} alt='' className='menu__logo' />
					</Link>
					{location.pathname !== routes.CALENDAR && (
						<ul className='menu__ulLinks'>
							<li>
								<NavLink
									onClick={makeSmoothScroll}
									exact
									to={routes.HOME}
									className={`menuItem menuItem--main ${dark ? 'textLight' : ''}`}
									activeClassName='menuItemActive menuItem--main'
								>
									{i18n.t('Home')}
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={makeSmoothScroll}
									to={routes.ABOUT}
									className={`menuItem menuItem--main ${dark ? 'textLight' : ''}`}
									activeClassName='menuItemActive menuItem--main'
								>
									{i18n.t('About-Us')}
								</NavLink>
							</li>
							<li>
								{userType !== 'employer' && (
									<NavLink
										onClick={makeSmoothScroll}
										to={routes.FOR_CANDIDATES}
										className={`menuItem menuItem--main ${dark ? 'textLight' : ''}`}
										activeClassName='menuItemActive menuItem--main'
									>
										{i18n.t('For-candidates')}
									</NavLink>
								)}
							</li>
							<li>
								<NavLink
									onClick={makeSmoothScroll}
									to={routes.APPLY_NOW}
									className={`menuItem menuItem--main ${dark ? 'textLight' : ''}`}
									activeClassName='menuItemActive menuItem--main'
								>
									{i18n.t('Apply-Now')}
								</NavLink>
							</li>
						</ul>
					)}
				</div>
				<div className='right_col'>
					{location.pathname !== routes.CALENDAR && (
						<button type='button' onClick={handleUserType} className='user_toggle' disabled={isLanguageLoading}>
							{userType === 'candidate' ? i18n.t('For employer') : i18n.t('For candidate')}
						</button>
					)}
					{location.pathname !== routes.CALENDAR && (
						<>
							<div className='social'>
								<a href='https://www.facebook.com/YUGOKRAFT/' target='_blank' rel='noopener noreferrer'>
									<img src={dark ? fbLight : fbDark} alt='' />
								</a>
							</div>

							<div className='footer__selectWrapper header__SelectWrapper'>
								<div className='footer__pseudoSelect header__pseudoSelect'>
									<div>
										<img src={setHref(language)} className='footer__flag' alt='flag' />
										<span className='langName'>{setLangTitle(language)}</span>
									</div>
									{userType === 'candidate' && <img src={arrowDown} className='footer__arrow' alt='select language' />}
								</div>
								<Dropdown
									disabled={userType === 'employer'}
									className='dropdown'
									value='B/K/M/S'
									itemTemplate={flagsTemplate}
									options={languages}
									onChange={(e) => {
										applyLanguage(e.target.value, userType);
									}}
									placeholder='B/K/M/S'
								/>
							</div>
							<button
								type='button'
								className={setClassNameButton()}
								onClick={() => {
									setDisplayMenuSmallScreen(!displayMenuSmallScreen);
									setDark(false);

									if (
										!dark &&
										!window.location.href.includes('/about') &&
										!window.location.href.includes('/for_candidates') &&
										!window.location.href.includes('/apply')
									) {
										setDark(true);
									}
								}}
							>
								{/* eslint-disable-next-line no-nested-ternary */}
								<img src={dark ? menu : displayMenuSmallScreen ? menuOpened : menuDark} alt='menu' />
							</button>
						</>
					)}
				</div>
			</div>
			<ul
				className={displayMenuSmallScreen ? 'menuUl' : 'menuUl menuHidden'}
				onScroll={(e) => {
					e.target.preventDefault();
				}}
			>
				<li>
					<NavLink exact to={routes.HOME} onClick={makeSmoothScroll} className='menuItem' activeClassName='menuItemActiveSmallScreen'>
						{i18n.t('Home')}
					</NavLink>
				</li>
				<li>
					<NavLink exact to={routes.ABOUT} className='menuItem' onClick={makeSmoothScroll} activeClassName='menuItemActiveSmallScreen'>
						{i18n.t('About-Us')}
					</NavLink>
				</li>

				{userType === 'candidate' && (
					<li>
						<NavLink
							exact
							to={routes.FOR_CANDIDATES}
							className='menuItem'
							onClick={makeSmoothScroll}
							activeClassName='menuItemActiveSmallScreen'
						>
							{i18n.t('For-candidates')}
						</NavLink>
					</li>
				)}

				<li>
					<NavLink exact to={routes.APPLY_NOW} className='menuItem' onClick={makeSmoothScroll} activeClassName='menuItemActiveSmallScreen'>
						{i18n.t('Apply-Now')}
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

const storeFuncs = {
	applyLanguage: funcsFromStore.applyLanguage,
	applyUserType: funcsFromStore.applyUserType,
};

const storeData = (state) => ({
	language: state.language,
	userType: state.userType,
});

MainMenu.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
	applyLanguage: PropTypes.func.isRequired,
	userType: PropTypes.string.isRequired,
	applyUserType: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
};

export default connect(storeData, storeFuncs)(MainMenu);
