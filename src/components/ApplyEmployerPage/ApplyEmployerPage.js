/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import i18n from 'i18n-js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import cn from 'classnames';
import tick from './images/tick.svg';
import './styles.scss';
import ApplyCongrads from './ApllyCongrads';
import { registerEmployer } from '../../store/actions/userData';
import Popup from '../Popup/Popup';
import { clearError } from '../../store/actions/errorHandling';
import { setNewEmployer } from '../../store/actions/newEmployer';

/**
 * @desc UI for employer registration form
 * @returns {JSX.Element}
 */
const ApplyEmployerPage = () => {
	const regName = /[^a-zA-ZА-Яа-яÄäÖöÜüßЇїЁёіІєЄ\-Ђђ\sЉљЊњЋћЏџЈјẞČčĆćDždžĐđŠšŽž']/g;
	const dispatch = useDispatch();

	const error = useSelector((state) => state.error);
	const formData = useSelector((state) => state.newEmployer);

	const [isNameValid, setIsNameValid] = useState(true);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isCompanyValid, setIsCompanyValid] = useState(true);
	const [isButtonActive, setIsButtonActive] = useState(false);
	const [isFormSubmitted, setFormIsSubmitted] = useState(false);
	const [isTermsErrorVisible, setIsTermsErrorVisible] = useState(false);
	const [isTermsChecked, setIsTermsChecked] = useState(false);
	let formValid = false;

	/**
	 * @desc function for validation registr employer form
	 */
	const validation = () => {
		formValid = true;

		if (validator.isEmail(formData.email)) {
			setIsEmailValid(true);
		} else {
			setIsEmailValid(false);
			formValid = false;
		}

		if (formData.name.length < 1) {
			setIsNameValid(false);
			formValid = false;
		}

		if (formData.company.length < 1) {
			setIsCompanyValid(false);
			formValid = false;
		}

		if (!isTermsChecked) setIsTermsErrorVisible(true);
	};

	/**
	 * @desc function for set form values
	 * @param {object} event - native event
	 */
	const handleInput = (event) => {
		const { value } = event.target;
		const inputName = event.target.name;

		switch (inputName) {
			case 'name':
				setIsNameValid(true);

				if (value.length < 1) {
					setIsNameValid(false);
					formValid = false;
				}

				dispatch(
					setNewEmployer({
						...formData,
						[inputName]: value.replace(regName, '').slice(0, 40),
					}),
				);
				break;

			case 'email':
				setIsEmailValid(true);

				if (!validator.isEmail(value)) {
					setIsEmailValid(false);
					formValid = false;
				}

				dispatch(
					setNewEmployer({
						...formData,
						[inputName]: value.slice(0, 40).trim(),
					}),
				);
				break;

			case 'company':
				setIsCompanyValid(true);

				if (value.length < 1) {
					setIsCompanyValid(false);
					formValid = false;
				}

				dispatch(
					setNewEmployer({
						...formData,
						[inputName]: value.slice(0, 40),
					}),
				);
				break;

			default:
				break;
		}
	};

	/**
	 * @desc function for disable submit button
	 */
	useEffect(() => {
		const isFormDataEmpty = Object.values(formData).includes('');

		if (isNameValid && isEmailValid && isCompanyValid && isTermsChecked && !isFormDataEmpty) {
			setIsButtonActive(true);
		} else {
			setIsButtonActive(false);
		}
	}, [isNameValid, isEmailValid, isCompanyValid, isTermsChecked, formData]);

	const handleSubmit = async () => {
		validation();

		if (formValid && isTermsChecked) {
			dispatch(registerEmployer(formData));
			setTimeout(() => {
				setFormIsSubmitted(true);
			}, 100);
		}
	};

	/**
	 * @desc function for reset form values and employer data from redux
	 */
	const hidePopup = () => {
		dispatch(clearError());
		setFormIsSubmitted(false);
		formValid = false;
		dispatch(
			setNewEmployer({
				name: '',
				email: '',
				company: '',
			}),
		);
		setIsTermsChecked(false);
		setIsButtonActive(false);
	};

	/**
	 * @desc function for toggle terms of use button
	 */
	const handleTermsCheckbox = () => {
		setIsTermsChecked(!isTermsChecked);

		if (!isTermsChecked && isTermsErrorVisible) {
			setIsTermsErrorVisible(false);
		}
	};

	return (
		<>
			{error.message && <Popup hidePopup={hidePopup} text={error.message} />}
			{isFormSubmitted && !error.message ? (
				<section className='apply__section apply__section--congrads'>
					<ApplyCongrads />
				</section>
			) : (
				<div className='apply'>
					<section className='apply__section apply__section_employer'>
						<form className='apply__form'>
							<h1 className='apply__heading'>{i18n.t('applyForm.registration')}</h1>
							<span className='apply__fields'>
								{i18n.t('applyForm.name')} <span className='apply__star'>*</span>
							</span>
							<input
								name='name'
								className={
									isNameValid === true ? 'apply__input apply__input_employer' : 'apply__input apply__input_employer apply__input--red'
								}
								placeholder={i18n.t('applyForm.enter your full name')}
								onChange={handleInput}
								onBlur={handleInput}
								value={formData.name}
							/>
							<span className='apply__fields'>
								{i18n.t('applyForm.email')} <span className='apply__star'>*</span>
							</span>
							<input
								name='email'
								className={
									isEmailValid === true ? 'apply__input apply__input_employer' : 'apply__input apply__input_employer apply__input--red'
								}
								placeholder={i18n.t('applyForm.enter your actual email')}
								onChange={handleInput}
								onBlur={handleInput}
								value={formData.email}
							/>
							<span className='apply__fields'>
								{i18n.t('applyForm.company')} <span className='apply__star'>*</span>
							</span>
							<input
								name='company'
								className={
									isCompanyValid === true ? 'apply__input apply__input_employer' : 'apply__input apply__input_employer apply__input--red'
								}
								placeholder={i18n.t('applyForm.enter name of your company')}
								onChange={handleInput}
								onBlur={handleInput}
								value={formData.company}
							/>

							<label htmlFor='checkboxWrapper' className='apply__checkboxLabel'>
								<div className='apply__checkboxWrapper'>
									<input
										id='checkboxWrapper'
										type='checkbox'
										className='apply__checkbox'
										onChange={handleTermsCheckbox}
										checked={isTermsChecked}
									/>
									<img src={tick} className='apply__tick' alt='tick' />
								</div>
								<div className='apply__checkboxText'>
									{i18n.t('I-confirm')}
									<Link to='/termsofuse' target='_blank' className='apply__link'>
										{i18n.t('GDPR-Terms-and-Conditions-2')}
									</Link>
								</div>
							</label>
						</form>
					</section>
					<div className='apply__terms'>
						<span style={{ visibility: isTermsErrorVisible ? 'visible' : 'hidden' }}>{i18n.t('check confirmed terms of use')}</span>
					</div>
					<div className='button__container'>
						<button
							type='button'
							onClick={handleSubmit}
							className={cn('apply__button', {
								'apply__button--disabled': !isButtonActive,
							})}
						>
							{i18n.t('applyForm.register')}
							<span className='apply__messageHandler' role='button' tabIndex={0} aria-label='show message' />
						</button>
						<a href='https://admin.yugokraft.de/login' className='apply__button'>
							{i18n.t('applyForm.login')}
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default ApplyEmployerPage;
