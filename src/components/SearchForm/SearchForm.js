import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
    const defaultSearchText = '';
    const [search, setSearch] = useState(defaultSearchText);

    const onInputChange = e => {
        setSearch(e.target.value);
    };

    const onSearchFormSubmit = e => {
        e.preventDefault();
        onSearch(search);
    };

    return (
        <section className="SearchForm">
            <h1 className="SearchForm-title">Asgard</h1>
            <p className="SearchForm-description">
                Beautiful, free photos from unsplash.
            </p>
            <p className="SearchForm-description">
                Gifted by the world’s most generous community of photographers.{' '}
                <span role="img" aria-labelledby="giftbox">
                    🎁
                </span>
            </p>
            <form className="SearchForm-form" onSubmit={onSearchFormSubmit}>
                <input
                    className="SearchForm-input"
                    placeholder="search images - laptops, wallpapers, etc"
                    type="search"
                    value={search}
                    onChange={onInputChange}
                />
                <button className="SearchForm-button" type="submit">
                    Search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
