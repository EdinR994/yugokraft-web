import './Popup.scss';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc function for creating simple Popup with text
 * @param {string} text - popup text
 * @param {function} hidePopup - function for close popup
 * @returns {JSX.Element}
 */
const Popup = ({ text, hidePopup }) => {
	return (
		<div className='popup'>
			<div className='popup__message'>
				<div>
					{text}
					<button
						type='button'
						className='popup__button'
						onClick={() => {
							hidePopup();
						}}
					>
						Ok
					</button>
				</div>
			</div>
		</div>
	);
};

Popup.propTypes = {
	text: PropTypes.string.isRequired,
	hidePopup: PropTypes.func.isRequired,
};

export default Popup;
