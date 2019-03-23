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
            <footer className="App-footer">
                <p className="App-footer-description">
                    Images are powered by{' '}
                    <a
                        href="https://pixabay.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="App-footer-logo"
                            alt="pixabay logo"
                            src="https://pixabay.com/static/img/logo.svg"
                        />
                    </a>
                </p>
            </footer>
        </div>
    </Router>
);

export default App;
