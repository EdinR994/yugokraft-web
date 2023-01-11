/* eslint-disable func-names */
/* eslint-disable react/forbid-prop-types */
import React, { useMemo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import i18n from 'i18n-js';
import { v4 as uuid } from 'uuid';

import Select from './FKselect/FKselect';
import TextArea from './FKtextarea/FKtextarea';
import ArrowLeft from './images/arrowLeft.svg';
import ArrowRight from './images/arrowRight.svg';
import Add from './images/add.svg';

import { setCandidateFormPage } from '../../store/actions/registrationForm';
import { patchCandidate } from '../../store/actions/userData';

/**
 * @desc UI for candidate registration form - step 3 languages
 * @returns {JSX.Element|null}
 */
const LanguagesForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const user = useSelector(({ user }) => user);
	const languagesFromRedux = user?.languages?.map((item) => {
		return {
			id: uuid(),
			language: item.language ? { value: item.language, label: i18n.t(item.language) } : '',
			level: item.level ? { value: item.level, label: i18n.t(item.level) } : '',
		};
	});
	const skillsFromRedux = user?.skills?.map((skill) => {
		return {
			...skill,
			id: uuid(),
			name: skill.name ? { value: skill.name, label: i18n.t(skill.name) } : '',
		};
	});

	/**
	 * @desc initial values object
	 */
	const initialValues = {
		languages:
			languagesFromRedux?.length > 0
				? languagesFromRedux
				: [
						{ id: uuid(), language: '', level: '' },
						{ id: uuid(), language: '', level: '' },
				  ],
		skills: skillsFromRedux?.length > 0 ? skillsFromRedux : [{ id: uuid(), name: '', description: '' }],
		experienceAbroad: user.experienceAbroad || '',
	};

	/**
	 * @desc validation schema for form values
	 */
	const validationSchema = useMemo(
		() =>
			yup.object({
				languages: yup.array().of(
					yup.object().shape({
						language: yup.object().test('', function (value) {
							// eslint-disable-next-line react/no-this-in-sfc
							if (this.parent?.level) {
								return Boolean(value);
							}

							return true;
						}),
						level: yup.object().test('', function (value) {
							// eslint-disable-next-line react/no-this-in-sfc
							if (this.parent?.language) {
								return Boolean(value);
							}

							return true;
						}),
					}),
				),
				skills: yup.array().of(
					yup.object().shape({
						name: yup.object(),
						description: yup.string(),
					}),
				),
				experienceAbroad: yup.string(),
			}),
		[],
	);

	/**
	 * @desc function for set form values to redux
	 */
	useEffect(() => {
		return () => {
			const reduxData = createReduxData(formRef.current.values);
			dispatch(patchCandidate(reduxData));
		};
	}, []);

	const levelOptions = [
		{ value: '', label: i18n.t('level') },
		{ value: 'A1', label: i18n.t('A1') },
		{ value: 'A2', label: i18n.t('A2') },
		{ value: 'B1', label: i18n.t('B1') },
		{ value: 'B2', label: i18n.t('B2') },
		{ value: 'C1', label: i18n.t('C1') },
		{ value: 'C2', label: i18n.t('C2') },
	];

	/**
	 * @desc function for create redux object data
	 * @param {any} values - form values
	 */
	const createReduxData = (values) => {
		return {
			languages: values.languages.map((item) => ({
				language: item.language.value ? item.language.value : '',
				level: item.level.value ? item.level.value : '',
			})),
			skills: values.skills.map((item) => ({
				name: item.name.value ? item.name.value : '',
				description: item.description,
			})),
			experienceAbroad: values.experienceAbroad,
		};
	};

	/**
	 * @desc function for go to previous step
	 */
	const handleBackPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(setCandidateFormPage('education'));
	};

	/**
	 * @desc function for submit form data
	 */
	const handleSubmit = useCallback(
		(values, { setSubmitting }) => {
			setSubmitting(false);
			dispatch(setCandidateFormPage('motivation'));
		},
		[dispatch],
	);

	const handleNextPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} innerRef={formRef}>
			{(formik) => {
				const languageOptions = [
					{ value: '', label: i18n.t('language') },
					{ value: 'Deutsch', label: i18n.t('Deutsch') },
					{ value: 'Englisch', label: i18n.t('Englisch') },
					{ value: 'Französisch', label: i18n.t('Französisch') },
					{ value: 'Russisch', label: i18n.t('Russisch') },
					{ value: 'Italienisch', label: i18n.t('Italienisch') },
					{ value: 'Spanisch', label: i18n.t('Spanisch') },
					{ value: 'Türksich', label: i18n.t('Türksich') },
				];

				const skillOptions = [
					{ value: '', label: i18n.t('choose-your-field-of-activity') },
					{ value: 'Kommunikation', label: i18n.t('Kommunikation') },
					{ value: 'Teamfähigkeit', label: i18n.t('Teamfähigkeit') },
					{ value: 'Problemlösung', label: i18n.t('Problemlösung') },
					{ value: 'Kreativität', label: i18n.t('Kreativität') },
					{ value: 'Arbeitsethik', label: i18n.t('Arbeitsethik') },
					{ value: 'Zwischenmenschliche Beziehungen', label: i18n.t('Zwischenmenschliche Beziehungen') },
					{ value: 'Zeitmanagement', label: i18n.t('Zeitmanagement') },
					{ value: 'Führungsqualität', label: i18n.t('Führungsqualität') },
					{ value: 'Präzision und Detailtreue', label: i18n.t('Präzision und Detailtreue') },
				];

				const onChangeLanguage = (e, name) => {
					if (!e.value) {
						formik.setFieldValue(name, '');
					} else {
						formik.setFieldValue(name, e);
					}
				};

				return (
					<Form className='form'>
						<div className='form__container'>
							<h2 className='form__header'>{i18n.t('Languages-and-experience-abroad')}</h2>
							<div>
								<FieldArray name='languages'>
									{(fieldArrayProps) => {
										const { push, remove, form } = fieldArrayProps;
										const { values } = form;
										const selectedLanguages = values.languages.map((item) => {
											if (!item.language.value) {
												return '';
											}

											return item.language.value;
										});
										const currentLangOptions = languageOptions.filter((language) => !selectedLanguages.includes(language.value));

										if (currentLangOptions[0].value !== '') {
											currentLangOptions.unshift({ value: '', label: i18n.t('language') });
										}

										return (
											<div className='form__languages'>
												{values.languages.map((item, i) => {
													const buttonClass = 'form__delete-button form__delete-button--select';

													return (
														<div key={item.id} className='form__row'>
															<Field
																component={Select}
																label={i18n.t('language')}
																name={`languages.${i}.language`}
																id={`languages.${i}.language`}
																placeholder={i18n.t('language')}
																options={currentLangOptions}
																width='323px'
																onChange={(e) => onChangeLanguage(e, `languages.${i}.language`)}
															/>
															<Field
																component={Select}
																label={i18n.t('level')}
																name={`languages.${i}.level`}
																id={`languages.${i}.level`}
																placeholder={i18n.t('level')}
																options={levelOptions}
																width='323px'
																padding
																onChange={(e) => onChangeLanguage(e, `languages.${i}.level`)}
															/>
															{i > 1 && (
																<button type='button' className={buttonClass} onClick={() => remove(i)}>
																	&times;
																</button>
															)}
														</div>
													);
												})}
												<label htmlFor='addLanguage' className='form__add-control'>
													<button
														type='button'
														id='addLanguage'
														className='form__add-button'
														onClick={() => push({ id: uuid(), language: '', level: '' })}
														disabled={values.languages.length > 6}
													>
														<img src={Add} alt={i18n.t('add-one-more-language')} />
														<span className='form__add-text'>{i18n.t('add-one-more-language')}</span>
													</button>
												</label>
											</div>
										);
									}}
								</FieldArray>
								<div className='form__row'>
									<Field
										component={TextArea}
										label={i18n.t('Experience-abroad')}
										name='experienceAbroad'
										id='experienceAbroad'
										placeholder={i18n.t('describe-your-experience-abroad')}
										maxLength='1200'
										widthBlock
										maxWidth={689}
										gap
									/>
								</div>
								<FieldArray name='skills'>
									{(fieldArrayProps) => {
										const { push, remove, form } = fieldArrayProps;
										const { values } = form;
										const selectedSkills = values.skills.map((skill) => {
											if (!skill.name.value) {
												return '';
											}

											return skill.name.value;
										});
										const currentSkillsOptions = skillOptions.filter((skill) => !selectedSkills.includes(skill.value));

										if (currentSkillsOptions[0].value !== '') {
											currentSkillsOptions.unshift({ value: '', label: i18n.t('choose-your-field-of-activity') });
										}

										return (
											<div className='form__skills'>
												{values.skills.map((item, i) => {
													const buttonClass = 'form__delete-button form__delete-button--select';

													return (
														<div key={item.id} className='form__row form__row--flex-start'>
															<Field
																component={Select}
																label={i18n.t('skills-up-to')}
																name={`skills.${i}.name`}
																id={`skills.${i}.name`}
																placeholder={i18n.t('choose-your-field-of-activity')}
																options={currentSkillsOptions}
																width='323px'
																onChange={(e) => onChangeLanguage(e, `skills.${i}.name`)}
															/>
															<Field
																component={TextArea}
																label={i18n.t('Description')}
																name={`skills.${i}.description`}
																id={`skills.${i}.description`}
																placeholder={i18n.t('Describe-your-skills-and-experience')}
																maxLength='1200'
																widthBlock
																maxWidth={323}
																padding
																gap
															/>
															{i > 0 && (
																<button type='button' className={buttonClass} onClick={() => remove(i)}>
																	&times;
																</button>
															)}
														</div>
													);
												})}
												<label htmlFor='addSkill' className='form__add-control'>
													<button
														type='button'
														id='addSkill'
														className='form__add-button'
														onClick={() => push({ id: uuid(), name: '', description: '' })}
														disabled={values.skills.length > 3}
													>
														<img src={Add} alt={i18n.t('Add-one-more-field')} />
														<span className='form__add-text'>{i18n.t('Add-one-more-field')}</span>
													</button>
												</label>
											</div>
										);
									}}
								</FieldArray>
							</div>
						</div>
						<div className='form__controls'>
							<button type='button' className='form__button-back' onClick={handleBackPage} disabled={formik.isSubmitting}>
								<img src={ArrowLeft} alt='' className='form__arrowLeft' />
								{i18n.t('back')}
							</button>
							<button type='submit' className='form__button-next' onClick={handleNextPage} disabled={formik.isSubmitting}>
								{i18n.t('next-step')}
								<img src={ArrowRight} alt='' className='form__arrowRight' />
							</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default LanguagesForm;
