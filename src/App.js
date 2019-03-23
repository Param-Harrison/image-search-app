import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';

const App = () => (
    <Router>
        <div className="App">
            <Route path="/" exact component={IndexPage} />
            <Route path="/search" component={SearchPage} />
        </div>
    </Router>
);

export default App;
