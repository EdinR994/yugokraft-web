import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18n-js';
import { useHistory } from 'react-router-dom';
import MeetingHours from '../MeetingHours/MeetingHours';
import styles from './TimeSlots.module.scss';
import CalendarPopup from '../CalendarPopup/CalendarPopup';
import { setPopupActive } from '../../store/actions/calendar';

/**
 * @desc Component for UI of available time for interview
 * @returns {JSX.Element}
 */
const TimeSlots = () => {
	const history = useHistory();
	const day = useSelector((state) => state.calendar.day);
	const calendar = useSelector((state) => state.calendar.calendar);
	const isPopupActive = useSelector((state) => state.calendar.isPopupActive);
	const dispatch = useDispatch();
	const dateFromString = (str) => {
		const date = new Date(str);
		const dateArr = date.toString().split(' ').slice(0, 4);
		const result = `${i18n.t(`calendar.days.${dateArr[0]}`)}, ${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`;
		return result;
	};

	const { date, periods } = day;
	const period = calendar && calendar[0];

	const handleClose = () => {
		dispatch(setPopupActive(false));
		history.push('/');
	};

	return (
		<div className={styles.slots}>
			<CalendarPopup visible={isPopupActive} handleClose={handleClose} />
			{date && period?.name && <div className={styles.slots__name}>{period.name}</div>}
			{date && <div className={styles.slots__date}>{dateFromString(day.date)}</div>}
			{periods &&
				Object.values(periods?.duration).map((range, idx) => (
					<div key={uuidv4()}>
						<div className={styles.slots__duration}>{range.length / 60} Minute Meeting</div>
						<div>
							<div key={uuidv4()}>
								<MeetingHours duration={range.length / 60} idx={idx} date={date} times={range.times} />
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default TimeSlots;
