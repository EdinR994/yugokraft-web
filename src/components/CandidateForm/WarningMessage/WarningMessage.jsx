import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import WarningSign from '../images/warning-sign.svg';

/**
 * @desc UI for show warning message
 * @returns {JSX.Element|null}
 */
const WarningMessage = () => {
	const language = useSelector(({ language }) => language);

	return (
		<div className='warning-message'>
			<img src={WarningSign} alt='warning-logo' className='warning-message__logo' />
			{language === 'de' ? (
				<div className='warning-message__text'>
					<p>
						Bitte füllen Sie das Formular in der &nbsp;
						<span className='warning-message__text--underlined'>deutschen oder englischen</span> Sprache aus.
					</p>
					<p>
						Wenn Sie Dokumente wie Lebenslauf, Zeugnisse, Zertifikate in &nbsp;
						<span className='warning-message__text--underlined'>deutsch oder englisch</span> haben, laden Sie diese ebenfalls übersetzt
						hoch.
					</p>
				</div>
			) : (
				<div className='warning-message__text'>
					<p>
						Please fill out the form in <span className='warning-message__text--underlined'>German or English</span>.
					</p>
					<p>
						If you have documents such as CV, references, certificates in &nbsp;
						<span className='warning-message__text--underlined'>German or English</span>, please upload the translated versions as well.
					</p>
				</div>
			)}
		</div>
	);
};

export default WarningMessage;
