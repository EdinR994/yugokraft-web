import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import i18n from 'i18n-js';
import { setPopupActive } from '../../store/actions/calendar';
import { clearError } from '../../store/actions/errorHandling';
import styles from './CalendarPopup.module.scss';

/**
 * @desc Popup for showing information after choosing time slot
 * @param {boolean} visible - value for toggle popup visible
 * @param {function} handleClose - function for close popup
 * @returns {JSX.Element}
 */
const CalendarPopup = ({ visible, handleClose }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { message } = useSelector((state) => state.error);
	const handleCloseWithError = () => {
		history.push('/');
		dispatch(clearError(null));
		dispatch(setPopupActive(false));
	};

	const handleCloseWithErrorQuery = () => {
		dispatch(clearError(null));
		dispatch(setPopupActive(false));
	};

	return (
		<div className={visible ? styles.popup : styles.popup__hidden}>
			{message === null && (
				<div className={styles.popup__container}>
					<span className={styles.popup__heading}>{i18n.t('calendar.popup.Congratulations')}</span>
					<span className={styles.popup__text}>
						{i18n.t('calendar.popup.success')}
						<br />
						{i18n.t('calendar.popup.reminder')}
					</span>
					<span className={styles.popup__text}>{i18n.t('calendar.popup.thanks')}</span>
					<button type='button' className={styles.popup__button_ok} onClick={handleClose}>
						{i18n.t('calendar.popup.Ok')}
					</button>
				</div>
			)}
			{message === 'Token has been expired!' && (
				<div className={styles.popup__container}>
					<span className={styles.popup__heading}>{i18n.t('token.expired')}</span>
					<button type='button' className={styles.popup__button_ok} onClick={handleCloseWithError}>
						{i18n.t('calendar.popup.Ok')}
					</button>
				</div>
			)}
			{message !== 'Token has been expired!' && message !== null && (
				<div className={styles.popup__container}>
					<span className={styles.popup__heading}>{i18n.t('calendar.popup.another')}</span>
					<span className={styles.popup__text}>
						{i18n.t('calendar.popup.cannot-take')}
						<br />
						{i18n.t('calendar.popup.time-taken')}
					</span>
					<span className={styles.popup__text}>{i18n.t('calendar.popup.go-back')}</span>
					<div className={styles.popup__buttons}>
						<button type='button' className={styles.popup__button_cancel} onClick={handleCloseWithErrorQuery}>
							{i18n.t('calendar.popup.cancel')}
						</button>
						<button type='button' className={styles.popup__button_ok} onClick={handleCloseWithErrorQuery}>
							<span>{i18n.t('calendar.popup.choose-other')}</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

CalendarPopup.propTypes = {
	visible: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default CalendarPopup;
