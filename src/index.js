import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Countdown } from './Countdown';

ReactDOM.render(
	<Countdown 
		timeTillDate="07 08 2025, 00:00 am" 
		timeFormat="MM DD YYYY, h:mm a" 
	/>, 
	document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
