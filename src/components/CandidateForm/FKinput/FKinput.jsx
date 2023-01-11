/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import cn from 'classnames';

import './FKinput.scss';

/**
 * @desc Custom input type text component
 * @param {object} field - formik field object
 * @param {object} form - formik form object
 * @param {string} label - label for element
 * @param {string} id - id for element
 * @param {number} width - width for element
 * @param {function} onChange - custom function for set form values
 * @param {boolean} gapSM - value for set small custom element gap
 * @param {boolean} gapLG - value for set large custom element gap
 * @param {boolean} minWidth - value for set custom element min width
 * @param {boolean} margin - value for set custom element margin
 * @param {boolean} padding - value for set custom element padding
 * @param {boolean} marginBot - value for set custom element margin bottom
 * @param {boolean} inputWidth - value for set custom element width
 * @returns {JSX.Element}
 */
const FKinput = ({ field, form, label, id, width, onChange, gapSM, gapLG, minWidth, margin, padding, marginBot, inputWidth, ...props }) => {
	const error = getIn(form.errors, field.name);
	const touch = getIn(form.touched, field.name);

	return (
		<label
			htmlFor={id}
			className={cn('form__label', {
				'form__label--gap-sm': gapSM,
				'form__label--gap-lg': gapLG,
				'form__label--min-width': minWidth,
				'form__label--margin': margin,
				'form__label--margin-bot': marginBot,
				'form__label--padding': padding,
			})}
		>
			{label}
			<input
				{...field}
				{...props}
				onChange={onChange || field.onChange}
				id={id}
				className={cn('form__input', {
					'form__input--width': inputWidth,
				})}
				style={{
					width,
					borderColor: touch && error ? '#FF0000' : '#E8EAEC',
				}}
			/>
		</label>
	);
};

FKinput.propTypes = {
	field: PropTypes.objectOf(PropTypes.any).isRequired,
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	width: PropTypes.number,
	onChange: PropTypes.func,
	gapSM: PropTypes.bool,
	gapLG: PropTypes.bool,
	minWidth: PropTypes.bool,
	margin: PropTypes.bool,
	padding: PropTypes.bool,
	marginBot: PropTypes.bool,
	inputWidth: PropTypes.bool,
};

FKinput.defaultProps = {
	label: null,
	placeholder: null,
	type: 'text',
	width: 323,
	onChange: undefined,
	gapSM: undefined,
	gapLG: undefined,
	minWidth: undefined,
	margin: undefined,
	padding: undefined,
	marginBot: undefined,
	inputWidth: undefined,
};

export default FKinput;
