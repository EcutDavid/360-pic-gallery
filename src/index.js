import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import 'aframe';
import 'aframe-mouse-cursor-component';

import 'normalize.css/normalize.css';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));