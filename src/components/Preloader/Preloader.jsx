import React from 'react';
import { MetroSpinner } from 'react-spinners-kit';
import styles from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div className={styles.preLoader}>
			<div className={styles.container}>
				<MetroSpinner size={80} />
			</div>
		</div>
	);
};

export default Preloader;
