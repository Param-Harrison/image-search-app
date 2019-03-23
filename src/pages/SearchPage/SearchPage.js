import React from 'react';
import { withRouter } from 'react-router-dom';

import './SearchPage.css';

const SearchPage = ({ match }) => {
    return (
        <div>
            Search for <strong>{match.params.searchText}</strong>
        </div>
    );
};

export default withRouter(SearchPage);
