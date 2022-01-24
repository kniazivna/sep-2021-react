import React from 'react';

import css from "./Character.module,css.css";

const Character = ({character}) => {

    const{image,name, status, species, gender, origin, location} = character;

    return (
        <>
            <div className={css.wrap}>
                <div>
                    <img src={image} alt={name}/>
                </div>
                <div>
                    <h2>{name}</h2>
                   <p><span>Status: </span>{status}</p>
                   <p><span>Species: </span>{species}</p>
                   <p><span>Gender: </span>{gender}</p>
                   <p><span>Origin: </span>{origin.name}</p>
                   <p><span>Location: </span>{location.name}</p>
                </div>
            </div>

        </>
    );
};

export {Character};