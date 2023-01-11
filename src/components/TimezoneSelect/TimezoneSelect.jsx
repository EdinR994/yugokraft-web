import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGMTChanged } from '../../store/actions/calendar';
import useWindowDimensions from '../../store/helpers/getWindowDimensions';
import styles from './TimezoneSelect.module.scss';

/**
 * @desc Component for choosing GMT time zone
 * @returns {JSX.Element}
 */
const TimezoneSelect = () => {
	const { width } = useWindowDimensions();
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState(false);
	const [selectedZone, setSelectedZone] = useState(0);
	const zones = ['Central European Time - GMT +01', 'Eastern European time - GMT +02', 'European Time - GMT +03'];
	const zonesToRender = zones.map((time) => {
		if (+width >= 925) {
			return time;
		}
		return time.split('-')[1];
	});

	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current.contains(e.target) && e.target.id !== 'select' && e.target.parentNode.id !== 'select') {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	const handleSelectedZone = (idx) => {
		const GMT = ['Europe/Berlin', 'Europe/Kiev', 'Europe/Minsk'];
		setSelectedZone(idx);
		dispatch(setGMTChanged(GMT[idx]));
	};
	const optionsHeight = zones.length * 60 + 10;

	const showTime = (offset) => {
		const isoDate = new Date().toISOString();
		return `${new Date(isoDate).getUTCHours() + offset + 1}:${`${new Date().getMinutes()}`.padStart(2, '0')}`;
	};

	return (
		<div className={styles.form__select_container}>
			<div role='presentation' id='select' className={styles.form__select} onClick={() => setIsVisible(!isVisible)}>
				<span className={styles.form__text}>
					{zonesToRender[selectedZone]} ({showTime(selectedZone)})
				</span>
				<div className={styles.form__triangle} style={{ transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg' }} />
			</div>
			<div
				ref={myRef}
				className={styles.form__options}
				style={{ maxHeight: isVisible ? `${optionsHeight}px` : '0px', border: isVisible ? '1px solid #D8E1E9' : '1px solid transparent' }}
			>
				{zonesToRender.map((item, idx) => (
					<div key={item} className={styles.form__option}>
						<label htmlFor={item} className={styles.form__checkbox}>
							{idx === selectedZone && (
								<>
									<input type='checkbox' id={item} checked={idx === selectedZone} onChange={() => setSelectedZone(idx)} />
									<span role='presentation' onClick={() => setSelectedZone(idx)} className={styles.form__zone}>
										{item} ({showTime(idx)})
									</span>
								</>
							)}
							{idx !== selectedZone && (
								<div role='presentation' className={styles.form__zone} onClick={() => handleSelectedZone(idx)}>
									{item} ({showTime(idx)})
								</div>
							)}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default TimezoneSelect;
