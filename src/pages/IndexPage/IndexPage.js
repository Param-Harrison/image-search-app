import React from 'react';
import { withRouter } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import './IndexPage.css';

const IndexPage = ({ history }) => {
    const onSearch = searchText => {
        history.push(`/search/${searchText}`);
    };

    return (
        <section className="IndexPage">
            <div className="IndexPage-container">
                <SearchForm onSearch={onSearch} />
            </div>
        </section>
    );
};

export default withRouter(IndexPage);
