import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './SearchPage.css';

const searchUrl = (searchText, page = 1) => {
    const API_URL = 'https://pixabay.com/api/';
    const queryParams = {
        key: process.env.REACT_APP_PIXABAY_API_KEY,
        q: encodeURIComponent(searchText),
        page: page,
        image_type: 'photo',
        pretty: true,
        safesearch: true,
    };
    const queryUrl = [];

    for (let key in queryParams) {
        queryUrl.push(`${key}=${queryParams[key]}`);
    }

    return API_URL + '?' + queryUrl.join('&');
};

const SearchPage = ({
    match: {
        params: { searchText },
    },
}) => {
    const initialResult = { hits: [] };
    const [data, setData] = useState(initialResult);
    const url = searchUrl(searchText);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            Search result for <strong>{searchText}</strong>
            {data &&
                data.hits &&
                data.hits.length > 0 &&
                data.hits.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.previewURL}
                            alt={`${searchText} - ${index}`}
                        />
                        <div>{image.user}</div>
                    </div>
                ))}
        </div>
    );
};

export default withRouter(SearchPage);
