import React, { useMemo, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import i18n from 'i18n-js';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

import Input from './FKinput/FKinput';
import Select from './FKselect/FKselect';
import TextArea from './FKtextarea/FKtextarea';
import FKcheckbox from './FKcheckbox/FKcheckbox';
import ArrowLeft from './images/arrowLeft.svg';
import ArrowRight from './images/arrowRight.svg';
import Add from './images/add.svg';

import { setCandidateFormPage } from '../../store/actions/registrationForm';
import { patchCandidate } from '../../store/actions/userData';

/**
 * @desc UI for candidate registration form - step 2 education
 * @returns {JSX.Element|null}
 */
const EducationForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const user = useSelector(({ user }) => user);
	const MIN_YEAR = moment().year() - 90;
	const MAX_YEAR = moment().year();
	const educationsFromRedux = user?.educations?.map((education) => {
		return {
			...education,
			id: uuid(),
			degree: education.degree ? { value: education.degree, label: i18n.t(education.degree) } : '',
		};
	});
	const jobsFromRedux = user?.jobs?.map((job) => {
		return {
			...job,
			id: uuid(),
			specialization: job.specialization ? { value: job.specialization, label: i18n.t(job.specialization) } : '',
		};
	});

	/**
	 * @desc initial values object
	 */
	const initialValues = {
		educations:
			educationsFromRedux?.length > 0
				? educationsFromRedux
				: [
						{
							id: uuid(),
							degree: '',
							specialty: '',
						},
				  ],
		jobs:
			jobsFromRedux?.length > 0
				? jobsFromRedux
				: [
						{
							id: uuid(),
							specialization: '',
							position: '',
							company: '',
							from: '',
							to: '',
							responsibilities: '',
							present: false,
						},
				  ],
		havePreviouslyWorked: user.havePreviouslyWorked || false,
	};

	/**
	 * @desc validation schema for form values
	 */
	const validationSchema = useMemo(
		() =>
			yup.object(
				{
					educations: yup.array().of(
						yup.object().shape({
							degree: yup.object().required(),
							specialty: yup.string().required(),
						}),
					),
					jobs: yup.mixed().when('havePreviouslyWorked', {
						is: (havePreviouslyWorked) => !havePreviouslyWorked,
						then: yup.array().of(
							yup.object().shape({
								specialization: yup.object().required(),
								position: yup.string().required(),
								company: yup.string().required(),
								from: yup
									.number()
									.min(MIN_YEAR)
									.max(MAX_YEAR)
									// eslint-disable-next-line func-names
									.test('', function (value) {
										// eslint-disable-next-line react/no-this-in-sfc
										return this.parent.to ? this.parent.to >= value : true;
									})
									.required(),
								to: yup.number().min(MIN_YEAR).max(MAX_YEAR).required(),
								responsibilities: yup.string().required(),
								present: yup.bool(),
							}),
						),
					}),
					havePreviouslyWorked: yup.bool(),
				},
				['havePreviouslyWorked'],
			),
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

	const educationOptions = [
		{ value: 'Grundschule', label: i18n.t('Grundschule') },
		{ value: 'Abitur', label: i18n.t('Abitur') },
		{ value: 'Promotion', label: i18n.t('Promotion') },
		{ value: 'Mittlerer Schulabschluss', label: i18n.t('Mittlerer Schulabschluss') },
		{ value: 'Universitätsabschluss', label: i18n.t('Universitätsabschluss') },
		{ value: 'Bachelor', label: i18n.t('Bachelor') },
		{ value: 'Master', label: i18n.t('Master') },
	];

	const jobOptions = [
		{ value: 'Ausbildungsbereich', label: i18n.t('Ausbildungsbereich') },
		{ value: 'Kaufmännischer-Bereich', label: i18n.t('Kaufmännischer-Bereich') },
		{ value: 'Technischer-Bereich', label: i18n.t('Technischer-Bereich') },
		{ value: 'Medizinischer-Bereich', label: i18n.t('Medizinischer-Bereich') },
		{ value: 'Sozialer Bereich', label: i18n.t('Sozialer Bereich') },
		{ value: 'Handwerksbereich', label: i18n.t('Handwerksbereich') },
		{ value: 'Verwaltungsbereich', label: i18n.t('Verwaltungsbereich') },
		{ value: 'Gastronomiebereich', label: i18n.t('Gastronomiebereich') },
		{ value: 'Anderer Bereich', label: i18n.t('Anderer Bereich') },
	];

	/**
	 * @desc function for create redux object data
	 * @param {any} values - form values
	 */
	const createReduxData = (values) => {
		return {
			educations: values.educations.map((item) => ({ degree: item.degree.value, specialty: item.specialty })),
			jobs: values.jobs.map((item) => ({
				specialization: item.specialization.value ? item.specialization.value : '',
				position: item.position,
				company: item.company,
				from: item.from,
				to: item.to,
				responsibilities: item.responsibilities,
				present: item.present,
			})),
			havePreviouslyWorked: values.havePreviouslyWorked,
		};
	};

	/**
	 * @desc function for go to previous step
	 */
	const handleBackPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(setCandidateFormPage('personalData'));
	};

	/**
	 * @desc function for submit form data
	 */
	const handleSubmit = useCallback(
		(values, { setSubmitting }) => {
			setSubmitting(false);
			dispatch(setCandidateFormPage('languages'));
		},
		[dispatch],
	);

	/**
	 * @desc function for scroll page
	 */
	const handleNextPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} innerRef={formRef}>
			{(formik) => {
				const onChangeYear = ({ target: { value } }, name) => {
					const pattern = /([\D])/g;
					if (!value.match(pattern)) {
						formik.setFieldValue(name, value);
					}
				};

				const onChangeHavePreviouslyWorked = (name) => {
					formik.setFieldValue(name, !formik.values.havePreviouslyWorked);
					formik.setFieldValue('jobs', [
						{ id: uuid(), specialization: '', position: '', company: '', from: '', to: '', responsibilities: '', present: false },
					]);
					delete formik.touched.jobs;
				};

				const onChangePresent = ({ target: { checked } }, name, targetField) => {
					formik.setFieldValue(name, checked);
					formik.setFieldValue(targetField, checked ? `${moment().year()}` : '');
				};

				const onBlurDropdowns = (name) => {
					const prepareName = name.split('.');
					const data = {
						educations: [],
						jobs: [],
						...formik.touched,
					};

					data[prepareName[0]][prepareName[1]] = { ...data[prepareName[0]][prepareName[1]], [prepareName[2]]: true };
					formik.setTouched(data);
				};

				return (
					<Form className='form'>
						<div className='form__container'>
							<h2 className='form__header'>{i18n.t('Education-Experience')}</h2>
							<div>
								<FieldArray name='educations'>
									{(fieldArrayProps) => {
										const { push, remove, form } = fieldArrayProps;
										const { values } = form;

										return (
											<div className='form__education'>
												{values.educations.map((item, i) => (
													<div key={item.id} className='form__section form__section--column'>
														<div className='form__row'>
															<Field
																component={Select}
																label={i18n.t('which-education-do-you-have')}
																name={`educations.${i}.degree`}
																id={`educations.${i}.degree`}
																placeholder={i18n.t('which-education-do-you-have')}
																options={educationOptions}
																width='323px'
																onBlur={onBlurDropdowns}
															/>
														</div>
														<div className='form__row'>
															<Field
																component={Input}
																label={i18n.t('rank')}
																name={`educations.${i}.specialty`}
																id={`educations.${i}.specialty`}
																placeholder={i18n.t('rank')}
																marginBot
																padding
															/>
															{i > 0 && (
																<button type='button' className='form__delete-button' onClick={() => remove(i)}>
																	&times;
																</button>
															)}
														</div>
													</div>
												))}
												<label htmlFor='addEducation' className='form__add-control'>
													<button
														type='button'
														id='addEducations'
														className='form__add-button'
														onClick={() => push({ id: uuid(), degree: '', specialty: '' })}
														disabled={values.educations.length > 4}
													>
														<img src={Add} alt={i18n.t('Bildungsabschlusshinzufügen')} />
														<span className='form__add-text'>{i18n.t('Bildungsabschlusshinzufügen')}</span>
													</button>
												</label>
											</div>
										);
									}}
								</FieldArray>

								<FieldArray name='jobs'>
									{(fieldArrayProps) => {
										const { push, remove, form } = fieldArrayProps;
										const { values } = form;
										return (
											<div className='form__jobs'>
												{values.jobs.map((item, i) => (
													<div key={item.id} className='form__section form__section--column'>
														<div className='form__row'>
															<Field
																component={Select}
																label={i18n.t('Educational-pathway')}
																name={`jobs.${i}.specialization`}
																id={`jobs.${i}.specialization`}
																placeholder={i18n.t('Educational-pathway')}
																options={jobOptions}
																width='323px'
																isDisabled={values.havePreviouslyWorked}
																onBlur={onBlurDropdowns}
															/>
														</div>
														<div className='form__row'>
															<div className='form__jobs-container'>
																<Field
																	component={Input}
																	label={i18n.t('Position')}
																	name={`jobs.${i}.position`}
																	id={`jobs.${i}.position`}
																	placeholder={i18n.t('Position')}
																	gapSM
																	margin
																	disabled={values.havePreviouslyWorked}
																/>
																<Field
																	component={Input}
																	label={i18n.t('Company')}
																	name={`jobs.${i}.company`}
																	id={`jobs.${i}.company`}
																	placeholder={i18n.t('Company')}
																	gapLG
																	width={267}
																	inputWidth
																	disabled={values.havePreviouslyWorked}
																/>
																<div className='form__jobs-wrapper'>
																	<Field
																		component={Input}
																		label={i18n.t('from')}
																		name={`jobs.${i}.from`}
																		id={`jobs.${i}.from`}
																		placeholder={i18n.t('year')}
																		maxLength='4'
																		onChange={(e) => onChangeYear(e, `jobs.${i}.from`)}
																		gapSM
																		width={100}
																		disabled={values.havePreviouslyWorked}
																	/>
																	<Field
																		component={Input}
																		label={i18n.t('to')}
																		name={`jobs.${i}.to`}
																		id={`jobs.${i}.to`}
																		placeholder={i18n.t('year')}
																		maxLength='4'
																		onChange={(e) => onChangeYear(e, `jobs.${i}.to`)}
																		gapSM
																		width={100}
																		disabled={values.jobs[i].present || values.havePreviouslyWorked}
																	/>
																	<Field
																		component={FKcheckbox}
																		label={i18n.t('till-now')}
																		name={`jobs.${i}.present`}
																		id={`jobs.${i}.present`}
																		onChange={(e) => onChangePresent(e, `jobs.${i}.present`, `jobs.${i}.to`)}
																		disabled={values.havePreviouslyWorked}
																		gap
																	/>
																</div>
															</div>
														</div>
														<div className='form__row'>
															<Field
																component={TextArea}
																name={`jobs.${i}.responsibilities`}
																id={`jobs.${i}.responsibilities`}
																placeholder={i18n.t('describe-your-responsibilities')}
																maxLength='1200'
																widthBlock
																maxWidth={828}
																padding
																disabled={values.havePreviouslyWorked}
															/>
															{i > 0 && (
																<button
																	type='button'
																	className='form__delete-button form__delete-button--textarea'
																	onClick={() => remove(i)}
																>
																	&times;
																</button>
															)}
														</div>
													</div>
												))}
												{!values.havePreviouslyWorked && (
													<label htmlFor='addJobs' className='form__add-control'>
														<button
															type='button'
															id='addJobs'
															className='form__add-button'
															onClick={() =>
																push({
																	id: uuid(),
																	specialization: '',
																	position: '',
																	company: '',
																	from: '',
																	to: '',
																	responsibilities: '',
																	present: false,
																})
															}
															disabled={values.jobs.length > 8 || values.havePreviouslyWorked}
														>
															<img src={Add} alt={i18n.t('add-job')} />
															<span className='form__add-text'>{i18n.t('add-job')}</span>
														</button>
													</label>
												)}
												<Field
													component={FKcheckbox}
													label={i18n.t('Keine Arbeitserfahrung')}
													name='havePreviouslyWorked'
													id='havePreviouslyWorked'
													onChange={() => onChangeHavePreviouslyWorked('havePreviouslyWorked')}
													position
												/>
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

export default EducationForm;
