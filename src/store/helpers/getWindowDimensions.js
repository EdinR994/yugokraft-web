import { useEffect, useState } from 'react';

/**
 * @desc function for handling screen window size
 * @returns {{width: number, height: number}}
 */
const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		height,
		width,
	};
};

/**
 * @desc custom hook for handling screen window size
 * @returns {{width: number, height: number}}
 */
const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
