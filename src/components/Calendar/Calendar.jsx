/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import i18n from 'i18n-js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './Calendar.module.scss';
import { getCalendar, setDay, setToken } from '../../store/actions/calendar';

/**
 * @desc UI for month calendar
 * @returns {JSX.Element}
 */
const Calendar = () => {
	const dispatch = useDispatch();
	const [activeDay, setActiveDay] = useState('');
	const [position, setPosition] = useState(null);
	const history = useHistory();
	const periods = useSelector((state) => state.calendar.calendar);
	const GMTChanged = useSelector((state) => state.calendar.GMTChanged);
	const { location } = history;
	const token = location.search.split('=')[1];
	dispatch(setToken(token));
	const calendar = useSelector((state) => state.calendar.calendar);
	const today = `${new Date().getFullYear()} ${new Date().getMonth() + 1} ${new Date().getDate()}`;
	const GMT = ['Europe/Berlin', 'Europe/Kiev', 'Europe/Minsk'];

	useEffect(() => {
		if (token) {
			dispatch(getCalendar(token, GMTChanged));
		} else {
			history.push('/');
		}
	}, [dispatch, token, GMTChanged]);

	const daysInMonth = (y, m) => 32 - new Date(y, m - 1, 32).getDate();

	const dateToString = (date) => {
		const year = date.getFullYear();
		const month = `${date.getMonth() + 1}`;
		const day = `${date.getDate()}`;

		return `${year} ${month.padStart(2, '0')} ${day.padStart(2, '0')}`;
	};

	const [date, setDate] = useState(new Date());
	const monthLength = daysInMonth(date.getFullYear(), date.getMonth() + 1);
	const startPosition = (new Date(date.getFullYear(), date.getMonth()).getDay() + 6) % 7;
	const calendarRows = startPosition >= 6 && monthLength >= 30 ? 6 : 6;
	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	const weeks = [];
	let counter = 1;
	const msInDay = 86400000;

	for (let i = 0; i < calendarRows; i += 1) {
		weeks[i] = [];
		for (let j = 0; j < 7; j += 1) {
			if (counter === 1 && j < startPosition) {
				const day = new Date(new Date(date.getFullYear(), date.getMonth()).getTime() - msInDay * (startPosition - j));
				weeks[i].push({
					day: day.getDate(),
					outside: true,
					date: dateToString(day),
					range: '',
					ranges: [],
				});
			} else if (counter <= monthLength) {
				const day = new Date(new Date(date.getTime()).setDate(counter));
				weeks[i].push({
					day: counter,
					outside: false,
					date: dateToString(day),
					range: '',
					ranges: [],
				});
				counter += 1;
			} else {
				const tempDate = new Date(new Date(date).setMonth(date.getMonth()));
				const day = new Date(new Date(tempDate.setDate(monthLength)).getTime() + msInDay * (counter - monthLength));
				weeks[i].push({
					day: day.getDate(),
					outside: true,
					date: dateToString(day),
					range: '',
					ranges: [],
				});
				counter += 1;
			}
		}
	}

	let preparedWeeks = weeks.map((week) =>
		week.map((day) => {
			if (
				periods[0]?.available?.some((period) => {
					return (
						+period.start.split('-').join('') <= +day.date.split(' ').join('') &&
						+period.end.split('-').join('') >= +day.date.split(' ').join('') &&
						new Date(new Date(day.date).setHours(23)) >= new Date()
					);
				})
			) {
				const periodsWithDay = periods[0].available.filter(
					(period) =>
						+period.start.split('-').join('') <= +day.date.split(' ').join('') &&
						+period.end.split('-').join('') >= +day.date.split(' ').join(''),
				);

				return {
					...day,
					range: 'in_range',
					ranges: [...day.ranges, periodsWithDay],
				};
			}
			return {
				...day,
				range: 'none',
				ranges: [],
			};
		}),
	);

	const handleNext = () => {
		const currentMonth = date.getMonth();
		const nextDate = new Date(date);
		nextDate.setDate(1);
		nextDate.setMonth(currentMonth + 1);
		setDate(nextDate);
	};

	const handlePrev = () => {
		const currentMonth = date.getMonth();
		const nextDate = new Date(date);
		nextDate.setMonth(currentMonth - 1);
		setDate(nextDate);
	};

	const handlePick = (day, weekIdx, dayIdx) => {
		setDate(new Date(day.date));
		setPosition({ week: weekIdx, day: dayIdx });
		setActiveDay(day.date);
	};

	useEffect(() => {
		const pos = {
			week: null,
			day: null,
		};
		const current = preparedWeeks.find((week, idx) =>
			week.find((item) => {
				if (item.date === activeDay) pos.week = idx;
				return item.date === activeDay;
			}),
		);
		const searchDay = current?.find((item, idx) => {
			if (item.date === activeDay) {
				pos.day = idx;
			}
			return item.date === activeDay;
		});
		if (searchDay) {
			dispatch(setDay(preparedWeeks[pos.week][pos.day]));
		}
	}, [periods, activeDay, position, dispatch, GMTChanged]);

	preparedWeeks = preparedWeeks.map((week) => {
		return week.map((day) => {
			if (day.ranges.length !== 0) {
				const periods = day.ranges.map((range) => {
					return {
						duration: range
							.map((item) => {
								return { [item.duration]: { length: item.duration } };
							})
							.reduce((acc, obj) => ({ ...acc, ...obj }), {}),
					};
				});
				return { ...day, periods: periods[0] };
			}
			return day;
		});
	});

	const getTimeRange = (from, to, duration) => {
		const durationInMinutes = duration / 60;
		let start = +from.slice(0, 2) * 60;
		const range = [];
		let end = +to.slice(0, 2) * 60;
		if (end === 0) end = 1440;
		if (end < start) end = 1440;
		while (start < end) {
			const strTime = `${Math.trunc(start / 60)
				.toString()
				.padStart(2, '0')}:${Math.trunc(start % 60)
				.toString()
				.padEnd(2, '0')}`;
			range.push(strTime);
			start += durationInMinutes;
		}
		return range;
	};

	preparedWeeks = preparedWeeks.map((week) => {
		return week.map((day) => {
			if (day.periods) {
				Object.keys(day.periods.duration)?.map((period) => {
					let preparedTimes = day.ranges[0].filter((range) => +range.duration === +period);

					preparedTimes = preparedTimes.reduce((acc, time) => [...acc, time.time], []);
					preparedTimes = preparedTimes
						.map((currentTime) => {
							let sum = [];
							currentTime.forEach((item) => (sum = [...sum, ...getTimeRange(item.from, item.to, period)]));
							return sum;
						})
						.reduce((acc, item) => [...acc, ...item], []);
					const times = [...new Set(preparedTimes)]
						.sort((a, b) => +a.slice(0, 2) - +b.slice(0, 2))
						.filter((item) => {
							if (day.date === today) {
								if (
									new Date().getTime() >=
									new Date(new Date(day.date).setHours(+item.slice(0, 2) - GMT.indexOf(GMTChanged))).setMinutes(+item.slice(3, 5))
								)
									return false;
							}
							const acquiredDates = calendar[0].acquired.filter((acquired) => {
								return acquired.date === day.date.split(' ').join('-');
							});
							if (acquiredDates.length !== 0) {
								return !acquiredDates.some((time) => time.from === item);
							}
							return true;
						});
					day.periods.duration[period].times = times;
				});
			}
			return day;
		});
	});

	const cx = classNames.bind(styles);
	return (
		<>
			<div className={styles.calendar}>
				<div className={styles.calendar__header}>
					<button
						onClick={handlePrev}
						type='button'
						aria-label='Next'
						className={`${styles.calendar__button} ${styles.calendar__button_prev}`}
						disabled={new Date().getMonth() === date.getMonth()}
					/>
					<span className={styles.calendar__heading}>
						{i18n.t(`calendar.months.${date.toDateString().split(' ')[1]}`)} {date.getUTCFullYear()}
					</span>
					<button
						onClick={handleNext}
						type='button'
						aria-label='Next'
						className={`${styles.calendar__button} ${styles.calendar__button_next}`}
						disabled={date.getMonth() === new Date(new Date().setMonth(new Date().getMonth() + 2)).getMonth()}
					/>
				</div>
				<div className={styles.calendar__week_header}>
					{days.map((day) => (
						<div key={uuidv4()} className={styles.cell_header}>
							{day}
						</div>
					))}
				</div>
				<div className={styles.dates}>
					{preparedWeeks.map((week, weekIdx) => (
						<div key={uuidv4()} className={styles.week}>
							{week.map((day, dayIdx) =>
								day.range === 'none' ? (
									<span key={uuidv4()} className={day.outside ? cx(styles.cell_outside) : cx(styles.cell, styles[day.range])}>
										{day.day}
									</span>
								) : (
									<div
										role='presentation'
										key={uuidv4()}
										className={
											day.outside
												? cx({
														cell_outside: true,
														[day.range]: true,
														cell_active: day.date === activeDay,
														cell_alone:
															day.range === 'in_range' && week[dayIdx + 1]?.range !== 'in_range' && week[dayIdx - 1]?.range !== 'in_range',
														cell_active_alone:
															day.date === activeDay && week[dayIdx + 1]?.range !== 'in_range' && week[dayIdx - 1]?.range !== 'in_range',
												  })
												: cx({
														cell: true,
														[day.range]: true,
														cell_active: day.date === activeDay,
														cell_active_alone:
															day.date === activeDay && week[dayIdx + 1]?.range !== 'in_range' && week[dayIdx - 1]?.range !== 'in_range',
														cell_alone:
															day.range === 'in_range' && week[dayIdx + 1]?.range !== 'in_range' && week[dayIdx - 1]?.range !== 'in_range',
												  })
										}
										onClick={() => handlePick(day, weekIdx, dayIdx)}
									>
										{day.day}
									</div>
								),
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Calendar;
