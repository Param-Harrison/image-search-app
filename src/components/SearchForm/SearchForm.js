import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <section className="SearchForm">
            <form className="SearchForm-form">
                <input placeholder="search images - laptops, wallpapers, etc" type="search" />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default SearchForm;
