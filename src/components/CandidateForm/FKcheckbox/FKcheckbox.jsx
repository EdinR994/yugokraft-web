/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './FKCheckbox.scss';

import checkboxChecked from '../images/checked.svg';
import checkboxNotChecked from '../images/notChecked.svg';

/**
 * @desc Custom input type checkbox component
 * @param {object} field - formik field object
 * @param {object} form - formik form object
 * @param {string} label - label for element
 * @param {string} id - id for element
 * @param {function} onChange - custom function for set form values
 * @param {boolean} position - value for set element position
 * @param {boolean} gap - value for set element gap
 * @returns {JSX.Element}
 */
const FkCheckbox = ({ field, form, label, id, onChange, position, gap, ...props }) => {
	const { value } = field;

	return (
		<label
			htmlFor={id}
			className={cn('form__label form__label-checkbox', {
				'form__checkbox-container': position,
				'form__checkbox-gap': gap,
			})}
		>
			<input {...field} {...props} id={id} type='checkbox' onChange={onChange || field.onChange} className='form__checkbox' />
			<img src={value ? checkboxChecked : checkboxNotChecked} className='form__checkbox-img' alt={value ? 'Checked' : 'Unchecked'} />
			{label}
		</label>
	);
};

FkCheckbox.propTypes = {
	field: PropTypes.objectOf(PropTypes.any).isRequired,
	form: PropTypes.objectOf(PropTypes.any).isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func,
	position: PropTypes.bool,
	gap: PropTypes.bool,
};

FkCheckbox.defaultProps = {
	label: null,
	onChange: undefined,
	position: undefined,
	gap: undefined,
};

export default FkCheckbox;
