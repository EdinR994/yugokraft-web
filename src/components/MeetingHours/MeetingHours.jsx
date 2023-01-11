import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { setActiveHour, acquireDate } from '../../store/actions/calendar';
import styles from './MeetingHours.module.scss';

/**
 * @desc UI of available hours in a day
 * @param {number} duration - meeting duration
 * @param {number} idx - meeting index
 * @param {string} date - meeting date
 * @param {string} times - meeting times
 * @returns {JSX.Element}
 */

const MeetingHours = ({ duration, idx, date, times }) => {
	const activeHour = useSelector((state) => state.calendar.activeHour);
	const calendar = useSelector((state) => state.calendar.calendar);
	const token = useSelector((state) => state.calendar.token);
	const GMTChanged = useSelector((state) => state.calendar.GMTChanged);
	const dispatch = useDispatch();
	const [activeTime, setActiveTime] = useState();
	const componentId = duration + idx + date + times;

	useEffect(() => {
		dispatch(setActiveHour(componentId));

		return () => {
			dispatch(setActiveHour(null));
		};
	}, [componentId, dispatch]);

	const minutesInHour = 60;
	let periods = [];

	const timeFromMinutes = (time) => {
		return `${Math.trunc(time / minutesInHour)}:${(time % minutesInHour).toString().padEnd(2, '0')}`;
	};

	periods = useMemo(() => {
		return times.map((time) => {
			return { date: time, id: uuidv4(), active: false };
		});
	}, [duration, date, calendar, times]);

	const memoizedHandleActiveTime = useCallback(
		(id) => {
			const handleActiveTime = (id) => {
				if (componentId !== activeHour) dispatch(setActiveHour(componentId));
				setActiveTime(id);
			};
			handleActiveTime(id);
		},
		[activeHour, componentId, dispatch],
	);

	const handleConfirm = (period) => {
		const offsets = ['Europe/Berlin', 'Europe/Kiev', 'Europe/Minsk'];
		const offset = offsets.indexOf(GMTChanged);
		const arr = period.date.split(':');
		const minutes = +arr[0] * minutesInHour + +arr[1] + duration;
		const requestBody = {
			token,
			date: date.split(' ').join('-'),
			time: {
				from: period.date.padStart(5, '0'),
				to: timeFromMinutes(minutes).padStart(5, '0'),
			},
			offset,
		};
		dispatch(acquireDate(requestBody));
	};

	return (
		<div>
			{periods.map((period) => (
				<div key={period.id} className={styles.meeting} onClick={() => memoizedHandleActiveTime(period.id)} role='presentation'>
					<div
						className={
							period.id === activeTime && activeHour === componentId
								? `${styles.meeting__date} ${styles.meeting__date_selected}`
								: styles.meeting__date
						}
					>
						{period.date}
					</div>
					<button
						className={styles.meeting__button}
						type='button'
						style={{ display: period.id === activeTime && activeHour === componentId ? 'block' : 'none' }}
						onClick={() => handleConfirm(period)}
					>
						Confirm
					</button>
				</div>
			))}
		</div>
	);
};

MeetingHours.propTypes = {
	idx: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	times: PropTypes.arrayOf(string).isRequired,
};

export default MeetingHours;
