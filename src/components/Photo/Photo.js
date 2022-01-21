import React from 'react';

import css from "./Photo.module.css";

const Photo = ({photo}) => {

    const {albumId, id, title, thumbnailUrl} = photo;

    return (
        <div className={css.photoBlock}>
            <div>
                <p>Album id: {albumId}</p>
                <p> Id: {id}</p>
                <h3>Title: {title}</h3>
            </div>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export {Photo};