import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './stylesheets/main.scss';

import HomePage from './components/Home/Home';
import Bill from './components/Bill/Bill';

const history = createBrowserHistory();

const Index = () =>{
    return (
    <Router history={history}>
        <div>
            <Route exact path="/"component={HomePage} />
            <Route exact path="/bill" component={Bill} />
        </div>
    </Router>
    );
}

ReactDOM.render(<Index />, document.getElementById('index'));