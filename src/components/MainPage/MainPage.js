/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import titleDe from '../../assets/images/text_title_de.svg';
import titleSh from '../../assets/images/text_title_sh.svg';
import titleUa from '../../assets/images/text_title_ua.svg';
import titleRu from '../../assets/images/text_title_ru.svg';
import titleEn from '../../assets/images/text_title_en.svg';
import homeImage from '../../assets/images/home_image.png';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import Enaida from './images/Enaida.jpg';
import zlatan from './images/zlatan.jpg';
import Ljiljana from './images/Ljiljana.jpg';
import routes from '../../constants/routes';
import * as funcsFromStore from '../../store/store';
import { getLanguage } from '../../store/actions/language';

/**
 * @desc UI of Main Page
 * @param {string} language - current language
 * @param {string} userType - current user type
 * @param {function} applyUser - function for set user type
 * @returns {JSX.Element}
 */
const MainPage = ({ language, userType, applyUser }) => {
	const [deployKiraText] = useState(false);
	const dispatch = useDispatch();

	const titles = {
		ua: titleUa,
		sh: titleSh,
		ru: titleRu,
		en: titleEn,
		de: titleDe,
	};

	const handleUserType = (event) => {
		const pressedButton = event.target.name;

		if (userType === 'candidate' && pressedButton === 'employer') {
			applyUser('employer');
		}
		if (userType === 'employer' && pressedButton === 'candidate') {
			applyUser('candidate');
			dispatch(getLanguage());
		}
	};

	const makeSmoothScroll = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 100);
	};

	const textSwithcher = (string) => {
		return userType === 'employer' ? `${userType}.${string}` : string;
	};

	return (
		<>
			<div className='headerBlock'>
				<div className='buttonContainer'>
					<button
						type='button'
						name='candidate'
						className={userType === 'candidate' ? 'headerButton' : 'headerButton headerButton--disabled'}
						onClick={handleUserType}
					>
						{i18n.t('For candidate')}
					</button>
					<button
						type='button'
						name='employer'
						className={userType === 'employer' ? 'headerButton' : 'headerButton headerButton--disabled'}
						onClick={handleUserType}
					>
						{i18n.t('For employer')}
					</button>
				</div>
				<img src={titles[language]} alt='language' className='title' />
				<img src={homeImage} alt='yugokraft promo' className='homeImage' />
			</div>
			<div className='headerBlockLine' />

			<div className='headerBlock__textOnLine'>
				<span>{i18n.t('Working-in-germany')}</span>
			</div>

			<section className='main__section'>
				<div className='main__textWithButton'>
					<h2 className='main__header'>{i18n.t('YUGOKRAFT je digitalni most')}</h2>
					<p className='main__text'>{i18n.t('U vremenu kada je')}</p>
					<Link onClick={makeSmoothScroll} className='main__button main__link' to={routes.APPLY_NOW}>
						{i18n.t('Apply-Now')}
					</Link>
				</div>
				<img src={image1} alt={i18n.t('YUGOKRAFT je digitalni most')} className='main__image' />
			</section>

			<section className='main__section main__reversedSection'>
				<img src={image2} alt={i18n.t('discover-the-best-jobs')} className='main__image' />
				<div className='main__textWithButton main__textRightWithButton'>
					<h2 className='main__header'>{i18n.t(textSwithcher('discover-the-best-jobs'))}</h2>
					<p className='main__text main__textRight'>{i18n.t(textSwithcher('discover-the-best-jobs-down-text'))}</p>
					<Link onClick={makeSmoothScroll} to={routes.ABOUT} type='button' className='main__link main__button main__buttonRight'>
						{i18n.t('About-Us')}
					</Link>
				</div>
			</section>

			<section className='main__section main__sectionBottom'>
				<div className='main__textWithButton'>
					<h2 className='main__header'>{i18n.t(textSwithcher('Explore-over-million'))}</h2>
					<p className='main__text'>{i18n.t(textSwithcher('Explore-over-million-down-text'))}</p>
					<Link onClick={makeSmoothScroll} to={routes.FOR_CANDIDATES} type='button' className='main__link main__button main__buttonBottom'>
						{i18n.t('For-candidates')}
					</Link>
				</div>
				<img src={image3} alt={i18n.t('Explore-over-million')} className='main__image' />
			</section>

			<div className='headerBlock__textOnLine headerBlock__textOnLineReviews'>
				<span
					className={`
          bottomTextOnLine
          ${document.documentElement.clientWidth > 600 ? 'main__companyReviews' : ''}
          `}
				>
					{i18n.t('company-reviews')}
				</span>
			</div>

			<section className='main__bottom'>
				<div className={`main__page ${deployKiraText ? 'main__pageDeployed' : null}`}>
					<img src={Enaida} alt='Enaida' className='main__pageLitere' />
					<h2 className='main__header main__pageHeader'>{i18n.t('Gretta')}</h2>
					<h3 className='main__conutrySource'>{i18n.t('Bosnien-Herzegowina')}</h3>
					<p className={`main__pageText main__firtsText ${deployKiraText ? 'main__textDeployed' : null}`}>
						<span className={`main__GrettaTextSpan  ${deployKiraText ? '' : 'main__GrettaText'}`}>{i18n.t('Gretta-description')}</span>
					</p>
				</div>

				<div className='main__page main__bigPage'>
					<img src={zlatan} alt='zlatan' className='main__pageLitere main__bigPageLitere' />
					<h2 className='main__header main__pageHeader main__bigPageHeader'>{i18n.t('Zlatan')}</h2>
					<h3 className='main__conutrySource'>{i18n.t('Bosnien-Herzegowina')}</h3>
					<p className='main__pageText main__bigPageText'>
						<span className='main__GrettaTextSpan'>{i18n.t('Zlatan-description')}</span>
					</p>
				</div>

				<div className='main__page'>
					<img src={Ljiljana} className='main__pageLitere' alt='Ljiljana' />
					<h2 className='main__header main__pageHeader'>{i18n.t('Ljiljana')}</h2>
					<h3 className='main__conutrySource'>{i18n.t('From-Serbia')}</h3>
					<p className='main__pageText'>
						<span className='main__GrettaTextSpan'>{i18n.t('Ljiljana-description')}</span>
					</p>
				</div>
			</section>
		</>
	);
};

const storeFuncs = {
	applyLanguage: funcsFromStore.applyLanguage,
	applyUser: funcsFromStore.applyUserType,
};

const storeData = (state) => ({
	language: state.language,
	userType: state.userType,
});

MainPage.propTypes = {
	language: PropTypes.string.isRequired,
	userType: PropTypes.string.isRequired,
	applyUser: PropTypes.func.isRequired,
};

export default connect(storeData, storeFuncs)(MainPage);
