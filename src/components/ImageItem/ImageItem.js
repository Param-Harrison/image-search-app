import React from 'react';
import './ImageItem.css';

const ImageItem = ({ searchText, index, previewURL, tags, user }) => {
    return (
        <div>
            <img src={previewURL} alt={`${searchText} - ${index}`} />
            <div>{tags}</div>
            <div>by {user}</div>
        </div>
    );
};

export default ImageItem;
