/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getIn } from 'formik';
import './FKselect.scss';
import i18n from 'i18n-js';
import cn from 'classnames';

import ArrowDown from '../images/arrowDown.svg';

/**
 * @desc Custom select component
 * @param {object} field - formik field object
 * @param {object} form - formik form object
 * @param {string} label - label for element
 * @param {string} id - id for element
 * @param {string} width - width for element
 * @param {boolean} gapSM - value for set small custom element gap
 * @param {boolean} gapLG - value for set large custom element gap
 * @param {boolean} maxWidth - value for set custom element max width
 * @param {boolean} minWidth - value for set custom element min width
 * @param {boolean} maxWidthSm - value for set custom element small max width
 * @param {boolean} padding - value for set custom element padding
 * @param {boolean} marginBot - value for set custom element margin bottom
 * @param {function} onChange - custom function for set form values
 * @param {function} onBlur - custom function for onBlur action
 * @returns {JSX.Element}
 */
const FKselect = ({
	field,
	form,
	id,
	label,
	gapSM,
	gapLG,
	maxWidth,
	minWidth,
	maxWidthSm,
	padding,
	marginBot,
	onChange,
	onBlur,
	...props
}) => {
	const error = getIn(form.errors, field.name);
	const touch = getIn(form.touched, field.name);
	const fieldValue = {
		label: field.value.value ? i18n.t(field.value.value) : '',
		value: field.value.value ? i18n.t(field.value.value) : '',
	};
	const styles = {
		control: () => ({
			position: 'relative',
			display: 'flex',
			width: props.width,
			minWidth: '131px',
			height: 43,
			marginTop: 9,
			border: '2px solid #e8eaec',
			borderColor: error && touch ? '#FF0000' : '#e8eaec',
			borderRadius: 3,
			backgroundColor: '#fff',
			fontFamily: 'Montserrat',
			fontWeight: 600,
			fontSize: 13,
			outline: 'none',
			cursor: 'pointer',
			boxShadow: 'none',
			'@media only screen and (max-width: 767px)': {
				...styles['@media only screen and (max-width: 767px)'],
				width: '100%',
			},
		}),
		valueContainer: (styles) => ({
			...styles,
			paddingLeft: 20,
			'@media only screen and (max-width: 767px)': {
				...styles['@media only screen and (max-width: 767px)'],
				paddingLeft: 5,
			},
		}),
		singleValue: (styles) => ({
			...styles,
			padding: '5px 0',
			color: '#1E496B',
		}),
		option: (styles, { isDisabled, isSelected }) => {
			return {
				display: 'flex',
				alignItems: 'center',
				minHeight: 33,
				padding: '8px 0 8px 10px',
				boxSizing: 'border-box',
				fontFamily: 'Montserrat',
				fontWeight: 600,
				fontSize: 13,
				color: '#1E496B',
				backgroundColor: isSelected ? '#E8EAEC' : '#FFFFFF',
				cursor: isDisabled ? 'not-allowed' : 'pointer',

				'&:hover': {
					backgroundColor: '#E8EAEC',
					borderLeft: '6px solid #F27480',
					paddingLeft: 4,
				},
			};
		},
		menuList: (styles) => ({
			...styles,
			maxHeight: 350,
			backgroundColor: '#FFFFFF',
			border: '2px solid #E8EAEC',
			borderRadius: 3,
			padding: 0,
		}),
		menu: (styles) => ({
			...styles,
			top: 35,
			boxShadow: 'none',
			zIndex: 3,
		}),
		placeholder: (styles) => ({
			...styles,
			color: '#C7C6C7',
		}),
	};

	return (
		<label
			htmlFor={id}
			className={cn('form__label', {
				'form__label--gap-sm': gapSM,
				'form__label--gap-lg': gapLG,
				'form__label--max-width': maxWidth,
				'form__label--max-width-sm': maxWidthSm,
				'form__label--min-width': minWidth,
				'form__label--margin-bot': marginBot,
				'form__label--padding-select': padding,
			})}
		>
			{label}
			<Select
				{...props}
				{...field}
				value={fieldValue.value ? fieldValue : ''}
				components={{
					DropdownIndicator: ({ selectProps }) => {
						const { menuIsOpen } = selectProps;
						return <img src={ArrowDown} className={menuIsOpen ? 'arrow-up' : 'arrow-down'} alt='arrow' />;
					},
					IndicatorSeparator: () => null,
				}}
				isSearchable={false}
				onChange={(e) => {
					if (onChange) {
						onChange(e, field.name);
					} else {
						form.setFieldValue(field.name, e);
					}
				}}
				onBlur={() => {
					if (onBlur) {
						onBlur(field.name);
					}
				}}
				styles={styles}
			/>
		</label>
	);
};

FKselect.propTypes = {
	field: PropTypes.objectOf(PropTypes.any).isRequired,
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	width: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	gapSM: PropTypes.bool,
	gapLG: PropTypes.bool,
	maxWidth: PropTypes.bool,
	maxWidthSm: PropTypes.bool,
	minWidth: PropTypes.bool,
	padding: PropTypes.bool,
	marginBot: PropTypes.bool,
};

FKselect.defaultProps = {
	label: null,
	onChange: undefined,
	onBlur: undefined,
	gapSM: undefined,
	gapLG: undefined,
	maxWidth: undefined,
	maxWidthSm: undefined,
	minWidth: undefined,
	padding: undefined,
	marginBot: undefined,
};

export default FKselect;
