import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
    const defaultSearchValue = '';
    const [inputValue, setInputValue] = useState(defaultSearchValue);
    const [search, setSearch] = useState(defaultSearchValue);

    const onInputChange = e => {
        setInputValue(e.target.value);
    };

    const onSearchSubmit = e => {
        e.preventDefault();
        setSearch(inputValue);
        console.log(search);
    };

    return (
        <section className="SearchForm">
            <h1 className="SearchForm-title">Asgard</h1>
            <p className="SearchForm-description">
                Beautiful, free photos from unsplash
            </p>
            <p className="SearchForm-description">
                Gifted by the world’s most generous community of photographers.{' '}
                <span role="img" aria-labelledby="giftbox">
                    🎁
                </span>
            </p>
            <form className="SearchForm-form" onSubmit={onSearchSubmit}>
                <input
                    className="SearchForm-input"
                    placeholder="search images - laptops, wallpapers, etc"
                    type="search"
                    value={inputValue}
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
