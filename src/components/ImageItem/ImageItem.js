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
            <div className="ImageItem-content">
                <div className="ImageItem-content-container">
                    <p className="ImageItem-tags">{tags}</p>
                    <p className="ImageItem-user">
                        <strong>by {user}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageItem;
