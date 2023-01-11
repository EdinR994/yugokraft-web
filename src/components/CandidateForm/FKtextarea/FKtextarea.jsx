/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import cn from 'classnames';

import './FKtextarea.scss';

/**
 * @desc Custom textarea component
 * @param {object} field - formik field object
 * @param {object} form - formik form object
 * @param {string} label - label for element
 * @param {string} id - id for element
 * @param {number} maxWidth - value for set custom element max width
 * @param {boolean} gap - value for set element gap
 * @param {boolean} widthBlock - value for set element gap
 * @param {boolean} padding - value for set custom element padding
 * @param {function} onChange - custom function for set form values
 * @param {string} placeholder - value for element placeholder
 * @returns {JSX.Element}
 */
const FKtextarea = ({ field, form, label, id, maxWidth, gap, widthBlock, padding, ...props }) => {
	const error = getIn(form.errors, field.name);
	const touch = getIn(form.touched, field.name);

	return (
		<label
			htmlFor={id}
			className={cn('form__label', {
				'form__label--width-block': widthBlock,
				'form__label--padding': padding,
			})}
		>
			{label}
			<textarea
				{...field}
				{...props}
				onChange={field.onChange}
				id={id}
				className='form__textarea'
				style={{
					marginTop: gap && '9px',
					width: '100%',
					maxWidth,
					borderColor: touch && error ? '#FF0000' : '#E8EAEC',
				}}
			/>
		</label>
	);
};

FKtextarea.propTypes = {
	field: PropTypes.objectOf(PropTypes.any).isRequired,
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	maxWidth: PropTypes.number,
	widthBlock: PropTypes.bool,
	onChange: PropTypes.func,
	gap: PropTypes.bool,
	padding: PropTypes.bool,
};

FKtextarea.defaultProps = {
	label: null,
	placeholder: null,
	maxWidth: undefined,
	widthBlock: undefined,
	onChange: undefined,
	gap: undefined,
	padding: undefined,
};

export default FKtextarea;
