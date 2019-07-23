import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import './variables.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const {render} = require('react-snapshot');

render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
