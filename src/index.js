import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import App from './components/app';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

const appNode = document.createElement('div');
appNode.id = 'app';
document.body.appendChild(appNode);

ReactGA.initialize('UA-54951000-1');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById('app'));
