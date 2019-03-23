import React from 'react';
import SearchForm from '../../components/SearchForm';
import './IndexPage.css';

const IndexPage = () => {
    const onSearch = search => {
        console.log(search);
    };

    return (
        <section className="IndexPage">
            <div className="IndexPage-container">
                <SearchForm onSearch={onSearch} />
            </div>
        </section>
    );
};

export default IndexPage;
