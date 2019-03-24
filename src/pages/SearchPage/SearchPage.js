import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './SearchPage.css';

const SearchPage = ({
    match: {
        params: { searchText },
    },
}) => {
    const initialResult = { hits: [] };
    const [data, setData] = useState(initialResult);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://pixabay.com/api/?` +
                    `key=${process.env.REACT_APP_PIXABAY_API_KEY}&` +
                    `q=${encodeURIComponent(searchText)}&` +
                    `page=1&` +
                    `image_type=photo&pretty=true&safesearch=true`
            );

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
