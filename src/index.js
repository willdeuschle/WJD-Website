import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Timeline from './components/Timeline/Timeline'
import './index.css'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='portfolio' component={Portfolio} />
            <Route path='timeline' component={Timeline} />
        </Route>
    </Router>
), document.getElementById('root'));
