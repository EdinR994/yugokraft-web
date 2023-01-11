import React from 'react';
import './Impressum.scss';
import i18n from 'i18n-js';

/**
 * @desc UI for LEGAL NOTICE screen
 * @returns {JSX.Element}
 */
const Impressum = () => {
	return (
		<article className='impressum'>
			<h1 className='impressum__header'>{i18n.t('Impressum')}</h1>

			<h2 className='impressum__header2'>{i18n.t('Angaben')}</h2>
			<h2 className='impressum__header2'>{i18n.t('Geschäftsanschrift')}</h2>
			<p className='impressum__text'>{i18n.t('Yugokraft GmbH')}</p>
			<p className='impressum__text'>{i18n.t('Leipziger Platz 15')}</p>
			<p className='impressum__text'>{i18n.t('10117 Berlin')}</p>
			<h2 className='impressum__header2'>{i18n.t('Gesetzlich vertretungsberechtigter')}</h2>
			<p className='impressum__text'>{i18n.t('Jan Seeger')}</p>
			<h2 className='impressum__header2'>{i18n.t('Kontakt')}</h2>
			<p className='impressum__text'>{i18n.t('Telefon')}</p>
			<p className='impressum__text'>
				{i18n.t('E-Mail')}
				<a href='mailto:info@yugokraft.de' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					info@yugokraft.de
				</a>
			</p>

			<p className='impressum__text'>
				{i18n.t('Web')}
				<a href='https://yugokraft.de' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://yugokraft.de
				</a>
			</p>
			<h2 className='impressum__header2'>{i18n.t('Handelsregister und')}</h2>
			<p className='impressum__text'>{i18n.t('Registergericht Amtsgericht Charlottenburg')}</p>
			<p className='impressum__text'>{i18n.t('Registernummer')}</p>
			<p className='impressum__text'>{i18n.t('Ust-ID-Nr')}</p>
		</article>
	);
};

export default Impressum;
