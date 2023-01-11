import React, { useEffect, useMemo, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import i18n from 'i18n-js';
import moment from 'moment';

import Input from './FKinput/FKinput';
import Select from './FKselect/FKselect';
import ArrowRight from './images/arrowRight.svg';

import { setCandidateFormPage, getCountries, setCandidate } from '../../store/actions/registrationForm';
import { patchCandidate, setCurrentCandidateData } from '../../store/actions/userData';

/**
 * @desc UI for candidate registration form - step 1 personal data
 * @returns {JSX.Element|null}
 */
const PersonalDataForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const { countries, currentCandidateData } = useSelector(({ registrationForm }) => registrationForm);
	const user = useSelector(({ user }) => user);
	const countriesFromServer = countries.map((country) => ({ value: country.name, label: i18n.t(`${country.name}`) }));
	const MIN_DATE = moment().year() - 120;
	const MAX_DATE = moment().year() - 16;
	const [monthNumber, setMonthNumber] = useState(null);
	const [yearNumber, setYearNumber] = useState(null);
	const [maxDaysNumber, setMaxDaysNumber] = useState(31);

	/**
	 * @desc initial values object
	 */
	const initialValues = {
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		email: user.email || '',
		code: user.code || '+',
		phone: user.phone || '',
		country: user.country ? { value: user.country, label: i18n.t(user.country) } : '',
		birthDay: user.birthDay || '',
		birthMonth: user.birthMonth ? { value: user.birthMonth, label: i18n.t(user.birthMonth) } : '',
		birthYear: user.birthYear || '',
	};

	/**
	 * @desc validation schema for form values
	 */
	const validationSchema = useMemo(
		() =>
			yup.object({
				firstName: yup.string().required(),
				lastName: yup.string().required(),
				email: yup.string().email().required(),
				code: yup.string().min(2).required(),
				phone: yup.string().required(),
				country: yup.object().required(),
				birthDay: yup
					.number()
					.min(1)
					// eslint-disable-next-line func-names
					.test('', function (value) {
						// eslint-disable-next-line react/no-this-in-sfc
						return maxDaysNumber >= value;
					})
					.required(),
				birthMonth: yup.object().required(),
				birthYear: yup.number().min(MIN_DATE).max(MAX_DATE).required(),
			}),
		[maxDaysNumber, MIN_DATE, MAX_DATE],
	);

	/**
	 * @desc mount component and get countries list from server
	 */
	useEffect(() => {
		document.getElementById('facebook').innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '223308032839011');
    fbq('track', 'Contact');
    fbq('track', 'Lead');
    fbq('track', 'SubmitApplication');
		`;
		dispatch(getCountries());
	}, [dispatch]);

	/**
	 * @desc function for set month index
	 */
	useEffect(() => {
		const monthsIndex = months.findIndex((month) => month.value === user.birthMonth);

		if (monthsIndex >= 0) {
			setMonthNumber(monthsIndex + 1);
		}
	}, []);

	/**
	 * @desc function for set max days in month
	 */
	useEffect(() => {
		setMaxDaysNumber(31);

		if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
			setMaxDaysNumber(30);
		}
		if (monthNumber === 2) {
			setMaxDaysNumber(29);
		}
		if (monthNumber === 2 && yearNumber % 4 !== 0) {
			setMaxDaysNumber(28);
		}
		if (monthNumber === 2 && yearNumber % 100 === 0 && yearNumber % 400 !== 0) {
			setMaxDaysNumber(28);
		}
	}, [monthNumber, yearNumber]);

	/**
	 * @desc function for set form values to redux
	 */
	useEffect(() => {
		return () => {
			const reduxData = {
				...formRef.current.values,
				birthMonth: formRef.current.values.birthMonth.value,
				country: formRef.current.values.country.value,
			};
			dispatch(patchCandidate(reduxData));
		};
	}, []);

	const months = [
		{ value: 'January', label: i18n.t('January') },
		{ value: 'February', label: i18n.t('February') },
		{ value: 'March', label: i18n.t('March') },
		{ value: 'April', label: i18n.t('April') },
		{ value: 'May', label: i18n.t('May') },
		{ value: 'June', label: i18n.t('June') },
		{ value: 'July', label: i18n.t('July') },
		{ value: 'August', label: i18n.t('August') },
		{ value: 'September', label: i18n.t('September') },
		{ value: 'October', label: i18n.t('October') },
		{ value: 'November', label: i18n.t('November') },
		{ value: 'December', label: i18n.t('December') },
	];

	/**
	 * @desc function for submit form data
	 */
	const handleSubmit = useCallback(
		(values, { setSubmitting }) => {
			let isFormHasChanges = false;
			const countryId = countries.find((item) => item.name === values.country.value).id;
			const dateOfBirth = `${values.birthYear}-${monthNumber < 10 ? 0 : ''}${monthNumber}-${values.birthDay}`;
			const phoneNumber = values.code + values.phone;
			const candidateId = localStorage.getItem('yugokraftCandidateId');
			const currentFormData = {
				...values,
				birthMonth: values.birthMonth.value,
				country: values.country.value,
			};

			if (candidateId) {
				const currentFormDataArr = Object.values(currentFormData);
				const currentReduxDataArr = Object.values(currentCandidateData);
				const differenceArr = currentFormDataArr.filter((item) => !currentReduxDataArr.includes(item));

				isFormHasChanges = differenceArr.length !== 0;
			}

			if (!candidateId || isFormHasChanges) {
				const serverData = {
					username: values.firstName,
					lastName: values.lastName,
					email: values.email,
					countryId,
					phoneNumber,
					dateOfBirth,
				};

				if (isFormHasChanges) {
					serverData.id = candidateId;
				}

				dispatch(setCandidate(serverData));
				dispatch(setCurrentCandidateData(currentFormData));
				setSubmitting(false);
			}
			dispatch(setCandidateFormPage('education'));
		},
		[dispatch, countries, monthNumber],
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
				const onChangeName = ({ target: { value } }, name) => {
					const pattern = /[^a-zA-ZА-Яа-яÄäÖöÜüßЇїЁёіІєЄ\-Ђђ\sЉљЊњЋћЏџЈјẞČčĆćDždžĐđŠšŽž]/g;

					if (!value.match(pattern)) {
						formik.setFieldValue(name, value);
					}
				};

				const onChangePhone = ({ target: { value } }, name) => {
					const codePattern = /((?!(\d|^\+)).)/g;
					const phonePattern = /([^\d\s])/g;

					switch (name) {
						case 'code':
							formik.setFieldValue(name, value.replace(codePattern, ''));
							break;
						case 'phone':
							if (!value.match(phonePattern)) {
								formik.setFieldValue(name, value);
							}
							break;
						default:
					}
				};

				const onBlurDropdowns = (name) => {
					formik.setTouched({
						...formik.touched,
						[name]: true,
					});
				};

				const onChangeBirth = (e, name) => {
					const pattern = /([\D])/g;
					const monthsIndex = months.findIndex((month) => month.value === e.value);

					switch (name) {
						case 'birthDay':
							if (+e.target.value <= 31) {
								formik.setFieldValue(name, e.target.value);
							}
							break;
						case 'birthMonth':
							formik.setFieldValue(name, e);
							setMonthNumber(monthsIndex + 1);
							break;
						case 'birthYear':
							if (!e.target.value.match(pattern)) {
								formik.setFieldValue(name, e.target.value);
								setYearNumber(e.target.value);
							}
							break;
						default:
					}
				};

				return (
					<Form className='form'>
						<div className='form__container'>
							<h2 className='form__header'>{i18n.t('personal-data')}</h2>
							<div className='form__row'>
								<Field
									component={Input}
									label={i18n.t('first-name')}
									name='firstName'
									id='first-name'
									placeholder={i18n.t('first-name')}
									onChange={(e) => onChangeName(e, 'firstName')}
								/>
								<Field
									component={Input}
									label={i18n.t('last-name')}
									name='lastName'
									id='last-name'
									placeholder={i18n.t('last-name')}
									onChange={(e) => onChangeName(e, 'lastName')}
								/>
							</div>

							<div className='form__row'>
								<Field
									component={Input}
									type='email'
									label={i18n.t('email-address')}
									name='email'
									id='email-address'
									placeholder={i18n.t('email-address')}
								/>
								<div>
									<label htmlFor='phone-code' className='form__label form__label--gap-sm'>
										{i18n.t('phone-number')}
									</label>
									<div className='form__section'>
										<Field
											component={Input}
											name='code'
											id='phone-code'
											maxLength='6'
											width={98}
											onChange={(e) => onChangePhone(e, 'code')}
											gapSM
										/>
										<Field
											component={Input}
											type='phone'
											name='phone'
											id='phone-number'
											maxLength='40'
											width={218}
											onChange={(e) => onChangePhone(e, 'phone')}
										/>
									</div>
								</div>
							</div>

							<div className='form__row'>
								<Field
									component={Select}
									label={i18n.t('country')}
									name='country'
									id='country'
									placeholder={i18n.t('choose-your-country')}
									options={countriesFromServer}
									width='323px'
									onBlur={onBlurDropdowns}
								/>
								<div className='form__wrapper'>
									<label htmlFor='birthDay' className='form__label form__label--gap-sm'>
										{i18n.t('day-of-birth')}
									</label>
									<div className='form__section'>
										<Field
											component={Input}
											name='birthDay'
											id='birthDay'
											placeholder={i18n.t('day')}
											maxLength='2'
											width={83}
											onChange={(e) => onChangeBirth(e, 'birthDay')}
											gapSM
											minWidth
										/>
										<Field
											component={Select}
											name='birthMonth'
											id='birthMonth'
											placeholder={i18n.t('Month')}
											options={months}
											width='131px'
											onChange={(e) => onChangeBirth(e, 'birthMonth')}
											gapSM
											maxWidthSm
											onBlur={onBlurDropdowns}
										/>
										<Field
											component={Input}
											name='birthYear'
											id='birthYear'
											placeholder={i18n.t('year')}
											maxLength='4'
											width={95}
											onChange={(e) => onChangeBirth(e, 'birthYear')}
										/>
									</div>
								</div>
							</div>
						</div>

						<button
							type='submit'
							className='form__button-next form__button-next--gap'
							onClick={handleNextPage}
							disabled={formik.isSubmitting}
						>
							{i18n.t('next-step')}
							<img src={ArrowRight} alt='' className='form__arrowRight' />
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default PersonalDataForm;
