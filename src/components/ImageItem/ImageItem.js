import React from 'react';
import './ImageItem.css';

const ImageItem = ({ searchText, index, webformatURL, tags, user }) => {
    return (
        <div className="ImageItem">
            <img
                className="ImageItem-image"
                src={webformatURL}
                alt={`${searchText} - ${index}`}
            />
            <div className="ImageItem-tags">{tags}</div>
            <div className="ImageItem-user">by {user}</div>
        </div>
    );
};

export default ImageItem;
