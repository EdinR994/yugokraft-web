import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import i18n from 'i18n-js';
import WarningMessage from './WarningMessage/WarningMessage';
import PersonalDataForm from './PersonalDataForm';
import EducationForm from './EducationForm';
import LanguagesForm from './LanguagesForm';
import MotivationForm from './MotivationForm';
import DocumentsForm from './UploadDocuments/DocumentsForm';
import Congrats from './Congrats/Congrats';

/**
 * @desc container for registration candidate form
 * @returns {JSX.Element|null}
 */
const CandidateFormPage = () => {
	const language = useSelector(({ language }) => language);
	i18n.locale = language;
	const { formPage } = useSelector(({ registrationForm }) => registrationForm);

	return (
		<article className='registration-form'>
			<div className='registration-form__container'>
				{formPage === 'personalData' && (
					<>
						<WarningMessage />
						<PersonalDataForm />
					</>
				)}
				{formPage === 'education' && <EducationForm />}
				{formPage === 'languages' && <LanguagesForm />}
				{formPage === 'motivation' && <MotivationForm />}
				{formPage === 'documents' && <DocumentsForm />}
				{formPage === 'congrats' && <Congrats />}
			</div>
		</article>
	);
};

export default CandidateFormPage;
