import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './styles.scss';

import Congrats from './Congrats';
import Error from '../Error/Error';

import { getConfirmToken, setConfirmToken } from '../../store/actions/confirmCv';

/**
 * @desc UI of CV confirmation screen
 * @returns {JSX.Element}
 */
const ConfirmCv = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const token = new URLSearchParams(window.location.search).get('token');
	const confirmCv = useSelector((state) => state.confirmCv);

	useEffect(() => {
		if (!token) {
			history.push('/');
		} else {
			dispatch(getConfirmToken({ token }));
		}
	}, []);

	const isCongratsOpen = () => {
		dispatch(setConfirmToken(false));
	};

	return <article className='confirm'>{confirmCv ? <Congrats isCongratsOpen={isCongratsOpen} /> : <Error />}</article>;
};

export default ConfirmCv;
