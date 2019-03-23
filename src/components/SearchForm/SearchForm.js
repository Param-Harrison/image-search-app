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
        <form className="SearchForm" onSubmit={onSearchFormSubmit}>
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
    );
};

export default SearchForm;
