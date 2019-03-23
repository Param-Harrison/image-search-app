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
            <main className="IndexPage-container">
                <h1 className="IndexPage-title">Asgard</h1>
                <p className="IndexPage-description">
                    Beautiful, free photos from pixabay.
                </p>
                <p className="IndexPage-description">
                    Gifted by the world’s most generous community of
                    photographers.{' '}
                    <span role="img" aria-labelledby="giftbox">
                        🎁
                    </span>
                </p>
                <SearchForm onSearch={onSearch} />
            </main>
        </section>
    );
};

export default withRouter(IndexPage);
