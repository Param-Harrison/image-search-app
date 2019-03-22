import React from 'react';
import SearchForm from '../../components/SearchForm';
import './IndexPage.css';

const IndexPage = () => {
    return (
        <section className="IndexPage">
            <div className="IndexPage-container">
                <SearchForm />
            </div>
        </section>
    );
};

export default IndexPage;
