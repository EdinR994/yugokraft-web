import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import i18n from 'i18n-js';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

const en = require('./locale/en.json');
const de = require('./locale/de.json');
const sh = require('./locale/sh.json');
const ua = require('./locale/ua.json');
const ru = require('./locale/ru.json');
const tr = require('./locale/tr.json');
const tr = require('./locale/es.json');
const ro = require('./locale/ro.json');

i18n.fallbacks = true;
i18n.translations = { en, de, sh, ua, ru, tr, es, ro };

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
