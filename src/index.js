import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/styles.scss';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  const { registerObserver } = require('react-perf-devtool');
  registerObserver();

  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
