import React from 'react';
import './styles.scss';
import i18n from 'i18n-js';
import { useSelector } from 'react-redux';
import var1 from './images/var1.svg';
import var2 from './images/var2.svg';
import var3 from './images/var3.svg';
import var4 from './images/var4.svg';
import var5 from './images/var5.svg';

/**
 * @desc UI for About page
 * @returns {JSX.Element}
 */
const AboutPage = () => {
	const { userType } = useSelector((state) => state);
	const textSwithcher = (string) => {
		return userType === 'employer' ? `${userType}.${string}` : string;
	};
	return (
		<article className='about'>
			<section className='about__top'>
				<h1 className='about__header'>{i18n.t(textSwithcher('We-will-help-you-to-find'))}</h1>
				<p className='about__text'>
					{i18n.t(textSwithcher('We-will-help-you-to-find-description1'))}
					<br />
					<br />
					{i18n.t(textSwithcher('We-will-help-you-to-find-description2'))}
				</p>
			</section>

			<div className='about__textOnLine'>
				<span className='about__firstNameOfBlock'>{i18n.t('Unsere-Grundsätze')}</span>
			</div>

			<section className='about__middle'>
				<div className='about__card'>
					<img src={var1} className='about__img' alt='' />
					<p className='about__text about__cardText'>{i18n.t(textSwithcher('about-description1'))}</p>
				</div>

				<div className='about__card'>
					<img src={var2} className='about__img' alt={i18n.t(textSwithcher('about-description2'))} />
					<p className='about__text about__cardText'>{i18n.t(textSwithcher('about-description2'))}</p>
				</div>

				<div className='about__card'>
					<img src={var3} className='about__img' alt={i18n.t(textSwithcher('about-description2'))} />
					<p className='about__text about__cardText'>{i18n.t(textSwithcher('about-description3'))}</p>
				</div>

				<div className='about__card'>
					<img src={var4} className='about__img' alt={i18n.t(textSwithcher('about-description4'))} />
					<p className='about__text about__cardText'>{i18n.t(textSwithcher('about-description4'))}</p>
				</div>

				<div className='about__card'>
					<img src={var5} className='about__img' alt={i18n.t(textSwithcher('about-description5'))} />
					<p className='about__text about__cardText'>{i18n.t(textSwithcher('about-description5'))}</p>
				</div>
			</section>

			<section className='about__bottom'>
				<div className='about__textOnLine about__textOnLineOnDarmBackground'>
					<span className='textOnLineLight'>{i18n.t('Wichtigkeit-des-ersten-Jobs')}</span>
				</div>

				<div className='about__textBottomWrapper'>
					<h2 className='about__bottomHeader'>{i18n.t('Warum-der-erste-Job')}</h2>
					<p className='about__text about__cardText about__cardTextLight'>{i18n.t('Warum-der-erste-Job-description')}</p>
				</div>
			</section>
		</article>
	);
};

export default AboutPage;
