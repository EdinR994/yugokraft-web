import React from 'react';
import './styles.scss';
import i18n from 'i18n-js';
import worker from './images/worker.jpg';
import worker2 from './images/worker2.jpg';
import worker3 from './images/worker3.jpg';
import worker4 from './images/worker4.jpg';
import worker5 from './images/worker5.jpg';
import worker6 from './images/worker6.jpg';

/**
 * @desc UI of For Candidates Page
 * @returns {JSX.Element}
 */
const ForCandidates = () => {
	return (
		<article className='forCandidates'>
			<div className='textOnLine forCandidates__textOnLine forCandidates__HowItWillBeLine'>
				<span className=' forCandidates__HowItWillBe '>{i18n.t('How-it-will-be')}</span>
			</div>

			<section className='forCandidates__middle'>
				<div className='forCandidates__middleCard'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							1
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 1</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step1')}</p>
				</div>
				<div className='forCandidates__middleCard'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							2
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 2</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step2')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							3
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 3</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step3')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							4
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 4</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step4')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							5
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 5</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step5')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							6
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 6</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step6')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							7
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 7</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step7')}</p>
				</div>

				<div className='forCandidates__middleCard forCandidates__middleCard3'>
					<div className='forCandidates__cardNumber' translate='no'>
						<span className='notranslate' translate='no'>
							8
						</span>
						<div className='forCandidates__cardNumberDescription'>{i18n.t('Step')} 8</div>
					</div>

					<p className='forCandidates__middleCardText'>{i18n.t('step8')}</p>
				</div>
			</section>

			<section className='forCandidates__bottom'>
				<div className='about__textOnLine about__textOnLineOnDarmBackground'>
					<span className='textOnLineLight'>{i18n.t('YUGOKRAFT-VERBINDET-ARBEITSMÄRKTE')}</span>
				</div>
				<div className='forCandidates__bottomContetnWrapper'>
					<h2 className='forCandidates__bottomHeader'>{i18n.t('offers-10000-vacancies')}</h2>
					<div className='forCandidates__bottomCardsWrapper'>
						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Erzieher-Hilfskraft')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;22.500 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker} alt='' className='forCandidates__bottomCardImage' />
						</div>

						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Ingenieur')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;45.000 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker2} alt='' className='forCandidates__bottomCardImage' />
						</div>

						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Security-Mitarbeiter')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;31.000 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker3} alt='' className='forCandidates__bottomCardImage' />
						</div>

						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Reinigungskraft')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;27.000 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker4} alt='' className='forCandidates__bottomCardImage' />
						</div>

						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Bauarbeiter')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;23.000 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker5} alt='' className='forCandidates__bottomCardImage' />
						</div>

						<div className='forCandidates__bottomCard'>
							<div className='forCandidates__bottomCardShadow'>
								<div className='forCandidates__bottomCardDescriptionWrapper'>
									<h3 className='forCandidates__bottomCardHeader'>{i18n.t('Küchenhilfskraft')}</h3>
									<span className='forCandidates__salary'>{i18n.t('ab')}</span>
									<span className='forCandidates__salaryCost'>&nbsp;25.000 {i18n.t('EURO')}</span>
									<span className='forCandidates__salary'>{i18n.t('im-Jahr')}</span>
								</div>
							</div>
							<img src={worker6} alt='' className='forCandidates__bottomCardImage' />
						</div>
					</div>
				</div>
			</section>

			<div className='headerBlock__textOnLine headerBlock__textOnLineReviews'>
				<span>{i18n.t('for-job')}</span>
			</div>

			<section className='forCandidates__top'>
				<h1 className='forCandidates__header'>{i18n.t('what-do-you-need')}</h1>
				<div className='forCandidates__topCardsWrapper'>
					<div className='forCandidates__card forCandidates__logo1'>
						<h2 className='forCandidates__cardHeader'>{i18n.t('passport')}</h2>
						<p className='forCandidates__text'>{i18n.t('Ein-abgelaufener-Pass')}</p>
					</div>

					<div className='forCandidates__card forCandidates__logo2'>
						<h2 className='forCandidates__cardHeader'>{i18n.t('application')}</h2>
						<p className='forCandidates__text forCandidates__textApplication'>{i18n.t('application-description')}</p>
					</div>
				</div>

				<div className='forCandidates__topCardsWrapper'>
					<div className='forCandidates__card forCandidates__logo3'>
						<h2 className='forCandidates__cardHeader'>{i18n.t('Polizeiliches-Führungszeugnis')}</h2>
						<p className='forCandidates__text'>{i18n.t('Bitte besorgen Sie eine Bestätigung')}</p>
					</div>

					<div className='forCandidates__card forCandidates__logo4'>
						<h2 className='forCandidates__cardHeader'>{i18n.t('Zeugnisse')}</h2>
						<p className='forCandidates__text'>{i18n.t('Zeugnisse-description')}</p>
					</div>
				</div>
			</section>
		</article>
	);
};

export default ForCandidates;
