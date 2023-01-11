import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import './styles.scss';

import i18n from 'i18n-js';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import imageCompression from 'browser-image-compression';
import noteWarning from '../images/note-warning.svg';
import tick from '../images/tick.svg';

import routes from '../../../constants/routes';
import Popup from '../../Popup/Popup';
import { getDocumentsCategories, setAdditionalDocuments, setIsDocsLoading } from '../../../store/actions/registrationForm';
import { setError } from '../../../store/actions/errorHandling';
import Preloader from '../../Preloader/Preloader';

/**
 * @desc UI for uploading additional documents
 * @returns {JSX.Element|null}
 */
const UploadAdditionalDocs = () => {
	const [uploadForm, setUploadForm] = useState([]);
	const [applyTermsOfUse, setApplyTermsOfUse] = useState(false);
	const [notChecckedTermsOfUse, setNotChecckedTermsOfUse] = useState(false);
	const [popupMaxSize, setPopupMaxSize] = useState(false);
	const [filesData, setFilesData] = useState([]);
	const dispatch = useDispatch();
	const { documentsCategories, isDocsLoading } = useSelector(({ registrationForm }) => registrationForm);
	const language = useSelector(({ language }) => language);
	const history = useHistory();
	const { message } = useSelector(({ error }) => error);
	const errorFromBack = message;

	const token = new URLSearchParams(window.location.search).get('token');

	/**
	 * @desc mount component and get documents categories from server
	 */
	useEffect(() => {
		if (!token) {
			history.push('/');
		}

		document.getElementById('facebook').innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '614352799500868');
		fbq('track', 'CompleteRegistration');    `;

		dispatch(getDocumentsCategories());
	}, [dispatch]);

	/**
	 * @desc preparing uploadedCategories object and uploadedFiles array for uploading to back
	 */
	useEffect(() => {
		const uploadedFiles = [];

		uploadForm
			.filter((category) => category.files.length > 0)
			.forEach((category) => {
				category.files.forEach((file) => {
					uploadedFiles.push(file.data);
				});
			});
		setFilesData(uploadedFiles);
	}, [uploadForm]);

	/**
	 * @desc preparing documents categories array
	 */
	useEffect(() => {
		const uploadDocumentsCategories = documentsCategories.map((category) => {
			let categoryName = '';

			switch (category.name) {
				case 'CV':
					categoryName = 'uploadForm.lebenslauf';
					break;
				case 'CVTranslatedInGermanOrEnglish':
					categoryName = 'uploadForm.lebenslauf in Deutsch';
					break;
				case 'Diploma':
					categoryName = 'uploadForm.diplom';
					break;
				case 'DiplomaTranslatedInGermanOrEnglish':
					categoryName = 'uploadForm.diplom in Deutsch';
					break;
				case 'Certificates':
					categoryName = 'uploadForm.arbeitszeugnisse';
					break;
				case 'CertificatesTranslatedInGermanOrEnglish':
					categoryName = 'uploadForm.arbeitszeugnisse in Deutsch';
					break;
				case 'References':
					categoryName = 'uploadForm.referenzen';
					break;
				case 'ReferencesTranslatedInGermanOrEnglish':
					categoryName = 'uploadForm.referenzen in Deutsch';
					break;
				case 'BiometricPhoto':
					categoryName = 'uploadForm.biometrisches Foto';
					break;
				case 'ValidPassport':
					categoryName = 'uploadForm.reisepass';
					break;
				case 'Other':
					categoryName = 'uploadForm.unterlagen';
					break;
				default:
					return '';
			}

			return {
				...category,
				files: [],
				isSelectBtnActive: false,
				name: categoryName,
			};
		});

		setUploadForm(uploadDocumentsCategories);
	}, [documentsCategories]);

	i18n.locale = language;

	/**
	 * @desc function for compress upload img
	 * @param {object} imageFile - object with img
	 */
	const compressionImg = async (imageFile) => {
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};

		try {
			return await imageCompression(imageFile, options).then((data) => data);
		} catch (error) {
			return error;
		}
	};

	let maxSize = 0;
	/**
	 * @desc function for add files by click on upload button
	 * @param {object} filesList - object with files
	 * @param {event} event
	 * @param {string} id - id selected category
	 */
	const handleAddFile = (filesList, id, event) => {
		if (filesList.length > 0) {
			dispatch(setIsDocsLoading(true));
		}

		const filesListArr = Object.values(filesList);
		const compressing = new Promise((res) => {
			const compressedFiles = [];
			filesListArr.forEach(async (file) => {
				if (file.type === 'image/jpeg') {
					await compressionImg(file).then((data) => {
						compressedFiles.push(data);
						res(compressedFiles);
					});
				} else {
					compressedFiles.push(file);
					res(compressedFiles);
				}
			});
		});

		compressing.then(async (data) => {
			const preparedFiles = data.map((file) => {
				const result = {
					id: uuidv4(),
					isSelected: false,
					data: file,
				};

				return result;
			});

			const result = uploadForm.map((category) => {
				if (category.id === id) {
					maxSize =
						uploadForm
							.map((category) => {
								return category.files.reduce((sum, current) => sum + current.data.size, 0);
							})
							.reduce((sum, size) => {
								return sum + size;
							}, 0) + preparedFiles.reduce((sum, current) => sum + current.data.size, 0);
					if (maxSize / 1024 / 1024 < 50) {
						return {
							...category,
							files: [...category.files, ...preparedFiles],
						};
					}
					setPopupMaxSize(true);
				}
				return category;
			});

			setUploadForm(result);
			maxSize = result
				.map((category) => {
					return category.files.reduce((sum, current) => sum + current.data.size, 0);
				})
				.reduce((sum, size) => {
					return sum + size;
				}, 0);
			dispatch(setIsDocsLoading(false));
		});
		event.target.value = '';
	};

	/**
	 * @desc function for select files by click on select button
	 * @param {string} id - id selected category
	 */
	const handleSelectFiles = (id) => {
		const result = uploadForm.map((category) => {
			if (category.id === id && category.files.length > 0) {
				return {
					...category,
					isSelectBtnActive: !category.isSelectBtnActive,
				};
			}

			return category;
		});

		setUploadForm(result);
	};

	/**
	 * @desc function for mark files by click on checkbox
	 * @param {string} categoryId - id selected category
	 * @param {string} fileId - id selected file
	 * @param {bool} isSelectBtnActive - is select btn active
	 */
	const handleMarkFile = (categoryId, fileId, isSelectBtnActive) => {
		if (!isSelectBtnActive) {
			return;
		}

		const result = uploadForm.map((category) => {
			if (category.id === categoryId) {
				return {
					...category,
					files: category.files.map((file) => {
						if (file.id === fileId) {
							return {
								...file,
								isSelected: !file.isSelected,
							};
						}

						return file;
					}),
				};
			}

			return category;
		});

		setUploadForm(result);
	};

	/**
	 * @desc function for delete files by click on delete btn
	 * @param {string} id - id selected category
	 */
	const handleDeleteFiles = (id) => {
		const result = uploadForm.map((category) => {
			if (category.id === id && category.files.length > 0) {
				const deleteFilesAmount = category.files.filter((file) => file.isSelected).length;

				if (deleteFilesAmount === 0) {
					return {
						...category,
						files: [],
						isSelectBtnActive: false,
					};
				}

				return {
					...category,
					files: category.files.filter((file) => !file.isSelected),
					isSelectBtnActive: false,
				};
			}

			return category;
		});

		setUploadForm(result);
	};

	/**
	 * @desc function for submit documents
	 */
	const handleSubmitDocuments = () => {
		if (!applyTermsOfUse) {
			setNotChecckedTermsOfUse(true);
		} else if (filesData.length > 0) {
			const formData = new FormData();
			const categoriesData = {};
			uploadForm
				.filter((category) => category.files.length > 0)
				.forEach((category, i) => {
					if (category.files.length === 0) {
						return;
					}

					category.files.forEach((file, index) => {
						if (file.data.name in categoriesData) {
							formData.append('docs', file.data, `${i}${index + 1}-${file.data.name}`);
							categoriesData[`${i}${index + 1}-${file.data.name}`] = category.id;
						} else {
							formData.append('docs', file.data, file.data.name);
							categoriesData[file.data.name] = category.id;
						}
					});
				});
			formData.append('categories', JSON.stringify(categoriesData));

			dispatch(setAdditionalDocuments(formData, token));
		} else {
			dispatch(setError(i18n.t('uploadForm.error')));
		}
	};

	return (
		<>
			<div className='uploadForm__note'>
				<img src={noteWarning} alt='note' className='uploadForm__noteImg' />
				<div className='warning-message__text'>
					<p>{i18n.t('uploadForm.note')}</p>
					<p>{i18n.t('uploadForm.high-quality photos')}</p>
				</div>
			</div>
			<form className='uploadForm__form'>
				<h2 className='uploadForm__header'>{i18n.t('Nessesary-documents')}</h2>

				<ul className='uploadForm__documentsHeader'>
					<li className='uploadForm__documentsСategory uploadForm__СategoryName'>{i18n.t('uploadForm.document name')}</li>
					<li className='uploadForm__documentsСategory uploadForm__СategoryPreview'>{i18n.t('uploadForm.preview')}</li>
					<li className='uploadForm__documentsСategory uploadForm__СategoryOperations'>{i18n.t('uploadForm.operations')}</li>
				</ul>
				<ul className='uploadForm__list'>
					{uploadForm.map((category, index) => (
						<li key={category.id}>
							<div className='uploadForm__documentsName'>
								<span className='uploadForm__documentsText'>{i18n.t(category.name)}</span>
								<div className='uploadForm__uploadControlsMobile'>
									<label htmlFor={`uploadForm__loadFile${index}`} className='uploadForm__uploadBtn'>
										<input
											id={`uploadForm__loadFile${index}`}
											className='uploadForm__loadFile'
											type='file'
											onChange={(e) => handleAddFile(e.target.files, category.id, e)}
										/>
									</label>
									<button
										aria-label='select'
										type='button'
										className={cn('uploadForm__selectBtn', {
											uploadForm__selectBtnActive: category.isSelectBtnActive,
										})}
										onClick={() => handleSelectFiles(category.id)}
									/>
									<button
										aria-label='delete'
										type='button'
										className='uploadForm__deleteBtn'
										onClick={() => handleDeleteFiles(category.id)}
									/>
								</div>
							</div>
							<ul className='uploadForm__documentsFilesList'>
								{category.files.map((file) => (
									<li key={file.id} className='uploadForm__documentsFilesItem'>
										<label htmlFor={`uploadForm__selectFile${file.id}`} className='uploadForm__selectFileLabel'>
											<input
												type='checkbox'
												className='uploadForm__selectFileCheckbox'
												id={`uploadForm__selectFile${file.id}`}
												checked={file.isSelected}
												onChange={() => handleMarkFile(category.id, file.id, category.isSelectBtnActive)}
											/>
											{category.isSelectBtnActive && <span className='uploadForm__selectFileFakeCheckbox' />}
											<span className='uploadForm__selectFileText'>{file.data.name}</span>
										</label>
									</li>
								))}
							</ul>
							<div className='uploadForm__uploadControls'>
								<label htmlFor={`uploadForm__loadFile${index}`} className='uploadForm__uploadBtn'>
									<input
										id={`uploadForm__loadFile${index}`}
										className='uploadForm__loadFile'
										type='file'
										onChange={(e) => handleAddFile(e.target.files, category.id, e)}
									/>
								</label>
								<button
									aria-label='select'
									type='button'
									className={cn('uploadForm__selectBtn', {
										uploadForm__selectBtnActive: category.isSelectBtnActive,
									})}
									onClick={() => handleSelectFiles(category.id)}
								/>
								<button
									aria-label='delete'
									type='button'
									className='uploadForm__deleteBtn'
									onClick={() => handleDeleteFiles(category.id)}
								/>
							</div>
						</li>
					))}
				</ul>
			</form>
			<div className='uploadForm__errors'>
				<p className={!notChecckedTermsOfUse ? 'transparent' : ''}>{i18n.t('check confirmed terms of use')}</p>
			</div>
			<div className='uploadForm__labelsWrapper'>
				<label htmlFor='uploadForm__checkbox' className='uploadForm__checkboxWrapper uploadForm__termsOfUseWrapper'>
					<div className='uploadForm__checkboxWrapper'>
						<input
							id='uploadForm__checkbox'
							type='checkbox'
							checked={applyTermsOfUse}
							className='uploadForm__checkbox'
							onChange={() => {
								setApplyTermsOfUse(!applyTermsOfUse);
								setNotChecckedTermsOfUse(false);
							}}
						/>
						<img src={tick} className='uploadForm__tick' alt={i18n.t('I-confirm')} />
					</div>
					<div className='uploadForm__checkboxTermsOfUse'>
						{i18n.t('I-confirm')}
						<Link
							onClick={() => {
								setTimeout(() => {
									window.scrollTo({ top: 0, behavior: 'smooth' });
								}, 100);
							}}
							to={routes.TERMS_OF_USE}
							target='_blank'
							rel='noopener noreferrer'
							className='uploadForm__termsOfUse'
						>
							{i18n.t('GDPR-Terms-and-Conditions-2')}
						</Link>
					</div>
				</label>
				<div className='uploadForm__bottomButtonsWrapper uploadForm__ButtonsWrapper2'>
					<button
						type='button'
						className={applyTermsOfUse ? 'uploadForm__button-next' : 'uploadForm__button-next uploadForm__grayButton'}
						onClick={handleSubmitDocuments}
					>
						{i18n.t('next-step')}
					</button>
				</div>
			</div>
			{popupMaxSize && <Popup text='Total size of files should not exceed 50 MB' hidePopup={() => setPopupMaxSize(false)} />}
			{errorFromBack && <Popup text={errorFromBack} hidePopup={() => dispatch(setError(null))} />}
			{isDocsLoading && <Preloader />}
		</>
	);
};

export default UploadAdditionalDocs;
