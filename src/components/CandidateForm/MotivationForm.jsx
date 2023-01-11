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

import { setCandidateFormPage, setProfile } from '../../store/actions/registrationForm';
import { patchCandidate } from '../../store/actions/userData';

/**
 * @desc UI for candidate registration form - step 4 motivation
 * @returns {JSX.Element|null}
 */
const MotivationForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const user = useSelector(({ user }) => user);
	const desiredSpheresFromRedux = user?.desiredSpheres?.map((sphere) => {
		return {
			id: uuid(),
			sphere: sphere ? { value: sphere, label: i18n.t(sphere) } : '',
		};
	});

	/**
	 * @desc initial values object
	 */
	const initialValues = {
		motivation: user.motivation || '',
		desiredSpheres: desiredSpheresFromRedux?.length > 0 ? desiredSpheresFromRedux : [{ id: uuid(), sphere: '' }],
		availableForCall: user?.availableForCall
			? { value: user.availableForCall, label: i18n.t(user.availableForCall) }
			: { value: 'yes', label: i18n.t('yes') },
		desiredRegion: user?.desiredRegion
			? { value: user.desiredRegion, label: i18n.t(user.desiredRegion) }
			: { value: 'Berlin', label: i18n.t('Berlin') },
		whenReadyToWork: user?.whenReadyToWork
			? { value: user.whenReadyToWork, label: i18n.t(user.whenReadyToWork) }
			: { value: 'Sofort', label: i18n.t('Sofort') },
	};

	/**
	 * @desc validation schema for form values
	 */
	const validationSchema = useMemo(
		() =>
			yup.object({
				motivation: yup.string().required(),
				desiredSpheres: yup.array().of(
					yup.object().shape({
						sphere: yup.object(),
					}),
				),
				available: yup.object(),
				desiredRegion: yup.object(),
				whenReadyToWork: yup.object(),
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

	/**
	 * @desc function for create redux object data
	 * @param {any} values - form values
	 */
	const createReduxData = (values) => {
		const desiredSpheresArr = values.desiredSpheres.map((item) => (item.sphere.value ? item.sphere.value : ''));
		const desiredSpheresIsEmpty = desiredSpheresArr.every((sphere) => {
			const sphereValues = Object.values(sphere);
			return sphereValues.every((value) => !value);
		});

		return {
			motivation: values.motivation,
			desiredSpheres: desiredSpheresIsEmpty ? [] : desiredSpheresArr,
			availableForCall: values.availableForCall.value,
			desiredRegion: values.desiredRegion.value,
			whenReadyToWork: values.whenReadyToWork.value,
		};
	};

	/**
	 * @desc function for go to previous step
	 */
	const handleBackPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(setCandidateFormPage('languages'));
	};
	/**
	 * @desc function for submit form data
	 */
	const handleSubmit = useCallback(
		(values, { setSubmitting }) => {
			const reduxData = createReduxData(values);
			const jobs = user.jobs.map((job) => ({ ...job, from: job.from ? `${job.from}-01-01` : '', to: job.to ? `${job.to}-01-01` : '' }));
			const jobsIsEmpty = user.jobs.every((job) => {
				const jobValues = Object.values(job);
				return jobValues.every((value) => !value);
			});
			const skillsIsEmpty = user.skills.every((skill) => {
				const skillValues = Object.values(skill);
				return skillValues.every((value) => !value);
			});
			const languagesIsEmpty = user.languages.every((language) => {
				const languageValues = Object.values(language);
				return languageValues.every((value) => !value);
			});

			const serverData = {
				...reduxData,
				candidateId: localStorage.getItem('yugokraftCandidateId'),
				availableForCall: values.availableForCall.value === 'yes',
				educations: user.educations,
				jobs: jobsIsEmpty ? [] : jobs,
				skills: skillsIsEmpty ? [] : user.skills,
				languages: languagesIsEmpty ? [] : user.languages,
				experienceAbroad: user.experienceAbroad,
				havePreviouslyWorked: user.havePreviouslyWorked,
			};
			dispatch(setProfile(serverData));
			setSubmitting(false);
			dispatch(setCandidateFormPage('documents'));
		},
		[dispatch, user],
	);

	const handleNextPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const availableForCallOptions = [
		{ value: 'yes', label: i18n.t('yes') },
		{ value: 'no', label: i18n.t('no') },
	];

	const desiredRegionOptions = [
		{ value: 'Berlin', label: i18n.t('Berlin') },
		{ value: 'München', label: i18n.t('München') },
		{ value: 'Stuttgart', label: i18n.t('Stuttgart') },
		{ value: 'Köln/Düsseldorf', label: i18n.t('Köln/Düsseldorf') },
		{ value: 'Hamburg', label: i18n.t('Hamburg') },
		{ value: 'Dresden', label: i18n.t('Dresden') },
		{ value: 'Frankfurt', label: i18n.t('Frankfurt') },
		{ value: 'Other city', label: i18n.t('Other city') },
	];

	const whenReadyToWorkOptions = [
		{ value: 'Sofort', label: i18n.t('Sofort') },
		{ value: 'Innerhalb-von-6-Monaten', label: i18n.t('Innerhalb-von-6-Monaten') },
		{ value: 'Innerhalb-von-12-Monaten', label: i18n.t('Innerhalb-von-12-Monaten') },
		{ value: 'Innerhalb-von-24-Monaten', label: i18n.t('Innerhalb-von-24-Monaten') },
	];

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} innerRef={formRef}>
			{(formik) => {
				const sphereOptions = [
					{ value: '', label: i18n.t('Bereich') },
					{ value: 'Pflege', label: i18n.t('Pflege') },
					{ value: 'Reinigung', label: i18n.t('Reinigung') },
					{ value: 'Bau', label: i18n.t('Bau') },
					{ value: 'Gastronomie', label: i18n.t('Gastronomie') },
					{ value: 'Administration/Büro', label: i18n.t('Administration/Büro') },
					{ value: 'Industrie', label: i18n.t('Industrie') },
					{ value: 'Bildung/Sozialer Bereich', label: i18n.t('Bildung/Sozialer Bereich') },
					{ value: 'In jedem möglichen Bereich', label: i18n.t('In jedem möglichen Bereich') },
				];

				const onChangeSphere = (e, name) => {
					if (!e.value) {
						formik.setFieldValue(name, '');
					} else {
						formik.setFieldValue(name, e);
					}
				};

				return (
					<Form className='form'>
						<div className='form__container'>
							<h2 className='form__header'>{i18n.t('Motivation')}</h2>
							<div>
								<div className='form__row'>
									<Field
										component={TextArea}
										label={i18n.t('Why-do-you-want-to-work-in')}
										name='motivation'
										id='motivation'
										placeholder={i18n.t('describe-the-purpose')}
										maxLength='1200'
										widthBlock
										maxWidth={689}
										gap
									/>
								</div>
								<FieldArray name='desiredSpheres'>
									{(fieldArrayProps) => {
										const { push, remove, form } = fieldArrayProps;
										const { values } = form;
										const selectedDesiredSpheres = values.desiredSpheres.map((item) => {
											if (!item.sphere.value) {
												return '';
											}

											return item.sphere.value;
										});
										const currentSphereOptions = sphereOptions.filter((sphere) => !selectedDesiredSpheres.includes(sphere.value));

										if (currentSphereOptions[0].value !== '') {
											currentSphereOptions.unshift({ value: '', label: i18n.t('Bereich') });
										}

										return (
											<div className='form__communications'>
												{values.desiredSpheres.map((item, i) => (
													<div key={item.id} className='form__row'>
														<Field
															component={Select}
															label={i18n.t('In welchem Bereich')}
															name={`desiredSpheres.${i}.sphere`}
															id={`desiredSpheres.${i}.sphere`}
															placeholder={i18n.t('Bereich')}
															options={currentSphereOptions}
															width='323px'
															maxWidth
															marginBot
															padding
															onChange={(e) => onChangeSphere(e, `desiredSpheres.${i}.sphere`)}
														/>
														{i > 0 && (
															<button
																type='button'
																className='form__delete-button form__delete-button--select-lg'
																onClick={() => remove(i)}
															>
																&times;
															</button>
														)}
													</div>
												))}
												<label htmlFor='addSphere' className='form__add-control'>
													<button
														type='button'
														id='addSphere'
														className='form__add-button'
														onClick={() => push({ id: uuid(), sphere: '' })}
														disabled={values.desiredSpheres.length > 3}
													>
														<img src={Add} alt={i18n.t('add-one-more-language')} />
														<span className='form__add-text'>{i18n.t('Weiteren Bereich hinzufügen')}</span>
													</button>
												</label>
											</div>
										);
									}}
								</FieldArray>
								<div className='form__row'>
									<Field
										component={Select}
										label={i18n.t('are-you-available-for-a')}
										name='availableForCall'
										id='availableForCall'
										options={availableForCallOptions}
										width='323px'
									/>
									<Field
										component={Select}
										label={i18n.t('Which-Region-do-you-prefer')}
										name='desiredRegion'
										id='desiredRegion'
										options={desiredRegionOptions}
										width='323px'
										maxWidth
									/>
								</div>
								<div className='form__row'>
									<Field
										component={Select}
										label={i18n.t('When-do-you-plan-to-start-working-in')}
										name='whenReadyToWork'
										id='whenReadyToWork'
										options={whenReadyToWorkOptions}
										width='323px'
										maxWidth
									/>
								</div>
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

export default MotivationForm;
