import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Route}from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
	<Router>
		<App/>
	</Router>
),document.getElementById('root'));