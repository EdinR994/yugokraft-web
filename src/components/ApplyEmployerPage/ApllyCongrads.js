import './styles.scss';
import React from 'react';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import congrats from './images/congrats.svg';
import routes from '../../constants/routes';
import { setNewEmployer } from '../../store/actions/newEmployer';

/**
 * @desc UI for screen after registration success
 * @returns {JSX.Element}
 */
const Congrads = () => {
	const dispatch = useDispatch();
	const language = useSelector(({ language }) => language);
	i18n.locale = language;

	/**
	 * @desc function for reset employer data from redux
	 */
	const handleClick = () =>
		dispatch(
			setNewEmployer({
				name: '',
				email: '',
				company: '',
			}),
		);

	return (
		<section className='congrats__page'>
			<div className='congrats__form '>
				<div className='congrats__wrapper'>
					<img src={congrats} className='congrats__image' alt={i18n.t('Congratulations')} />
					<p className='congrats__text'>
						Vielen Dank, dass Sie sich bei YUGOKRAFT registriert haben. Wir werden uns in kürze bei Ihnen melden.
					</p>
				</div>
			</div>
			<Link to={routes.HOME} className='congrats__home' onClick={handleClick}>
				{i18n.t('Home')}
			</Link>
		</section>
	);
};

export default Congrads;
