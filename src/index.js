import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './App'
import { NotFound404 } from './components/pages/404/404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="*" component={NotFound404} />
        </Switch>
    </Router>, document.getElementById('root')
);
serviceWorker.unregister();