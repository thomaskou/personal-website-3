import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactGA.initialize('UA-145825675-1');
ReactGA.pageview('/');

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
