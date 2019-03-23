import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';
import NoMatchPage from './pages/NoMatchPage';

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/search/:searchText" component={SearchPage} />
                <Route component={NoMatchPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
