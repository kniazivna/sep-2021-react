import React from 'react';

import css from "./Photo.module.css"

const Photo = (photo) => {

    const {albumId, id, title, url} = photo;
    return (
        <div>
            <div className={css.photo}>
                <div>
                    <p>Album id:{albumId}</p>
                    <p>Id: {id}</p>
                    <p>Title: {title}</p>
                </div>
                <div><img src={url} alt={id}/></div>
            </div>
        </div>
    );
};

export default Photo;