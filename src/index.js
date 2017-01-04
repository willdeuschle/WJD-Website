import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='about' component={About} />
            <Route path='portfolio' component={Portfolio} />
        </Route>
    </Router>
), document.getElementById('root'));
