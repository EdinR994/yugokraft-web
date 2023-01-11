import React from 'react';
import Calendar from '../Calendar/Calendar';
import TimezoneSelect from '../TimezoneSelect/TimezoneSelect';
import TimeSlots from '../TimeSlots/TimeSlots';
import styles from './CalendarPage.module.scss';
import logo from './images/yugoLogo.svg';

/**
 * @desc Container for calendar components
 * @returns {JSX.Element}
 */
const CalendarPage = () => {
	return (
		<>
			<div className={styles.container}>
				<img src={logo} alt='logo' className={styles.container__logo} />
				<div>
					<span className={styles.container__heading}>Select date for interview</span>
					<Calendar />
					<span className={styles.container__heading} style={{ margin: '25px' }}>
						Select timezone
					</span>
					<TimezoneSelect />
				</div>
				<TimeSlots />
			</div>
		</>
	);
};

export default CalendarPage;
