import React, { useState } from 'react';
import './Select.scss';
import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import arrowDown from './images/arrowDown.svg';
/* eslint-disable */
/**
 * @desc function for creating custom Select component
 * @param {object} values - select values
 * @param {function} cb - function for set values
 * @param {string} placeHolder - element placeholder
 * @param {boolean} selected - value to toggle selected option
 * @param {string} classWord - class name
 * @param {function} click - function for set is options open
 * @returns {JSX.Element}
 */
const Select = ({ values, cb, placeHolder, selected, classWord = 'className', click = () => null }) => {
	const [openList, setOpenList] = useState(false);
	return (
		<label
			htmlFor='select__wrapper'
			className='select__wrapper'
			onBlur={() => {
				setOpenList(false);
			}}
		>
			<div
				role='button'
				className={`select ${classWord}`}
				tabIndex={Math.trunc(Math.random() * 100)}
				onClick={() => {
					setOpenList(!openList);
					click();
				}}
				onKeyPress={() => {}}
				onBlur={() => {
					setOpenList(false);
				}}
			>
				<p className={selected ? 'select__selected' : 'select__placeHolder'}>{placeHolder}</p>
				<img src={arrowDown} alt='' className={openList ? 'select__arrowUp' : 'select__arrowDown'} />
				{openList ? (
					<div className='select__optionsWrapper'>
						{values.map((value) => (
							<div
								onKeyPress={() => {}}
								role='button'
								key={value.id}
								className='select__option'
								onClick={() => {
									cb(value.value);
									setOpenList(false);
								}}
							>
								<p>{i18n.t(value.name)}</p>
							</div>
						))}
					</div>
				) : null}
			</div>
		</label>
	);
};

Select.defaultProps = {
	values: [],
	cb: () => null,
	placeHolder: '',
	selected: false,
	classWord: '',
	click: () => null,
};

Select.propTypes = {
	values: PropTypes.arrayOf(PropTypes.any),
	cb: PropTypes.func,
	placeHolder: PropTypes.string,
	selected: PropTypes.bool,
	classWord: PropTypes.string,
	click: PropTypes.func,
};

export default Select;
