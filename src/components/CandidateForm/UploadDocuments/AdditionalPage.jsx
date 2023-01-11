import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import AdditionalForm from './AdditionalForm';
import Congrats from './Congrats';

/**
 * @desc container for additional documents form
 * @returns {JSX.Element}
 */
const AdditionalPage = () => {
	const { isAdditionalDocsSended } = useSelector(({ registrationForm }) => registrationForm);

	return (
		<article className='additional-form'>
			<div className='additional-form__container'>{!isAdditionalDocsSended ? <AdditionalForm /> : <Congrats />}</div>
		</article>
	);
};

export default AdditionalPage;
