import React from 'react';
import { Link } from 'react-router-dom';

import './NoMatchPage.css';

const NoMatchPage = () => {
    return (
        <section className="NoMatchPage">
            <div className="NoMatchPage-container">
                <h1 className="NoMatchPage-title">
                    404 - Loki will help you find Asgard
                </h1>
                <p className="NoMatchPage-description">
                    Thanks for trying my ebook, Keep learning and help me
                    improve my teaching
                </p>
                <p>
                    A website without gradient background is a piece of shit -{' '}
                    <strong>God Thor</strong>
                </p>
                <Link className="NoMatchPage-link" to="/">
                    Go to Main Page
                </Link>
            </div>
        </section>
    );
};

export default NoMatchPage;
