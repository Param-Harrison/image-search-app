import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import IndexPage from './pages/IndexPage';

const App = () => (
    <Router>
        <div className="App">
            <Route path="/" exact component={IndexPage} />
        </div>
    </Router>
);

export default App;
