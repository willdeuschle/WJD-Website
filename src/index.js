import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Portfolio from './components/Portfolio/Portfolio';
import Timeline from './components/Timeline/Timeline';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='portfolio' component={Portfolio} />
            <Route path='timeline' component={Timeline} />
        </Route>
    </Router>
), document.getElementById('root'));
