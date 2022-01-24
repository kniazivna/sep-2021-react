import React from 'react';
import {Link} from "react-router-dom";

import css from "./Episode.module.css";

const Episode = ({episod}) => {

    const {id, name, air_date, episode} = episod;

    return (
        <>
            <div className={css.episode}>
                <h1>{name}</h1>
                <p><span>Episode: {episode}</span> </p>
                <p><span>Air date: {air_date}</span> </p>
                <Link to={id.toString()} state={episod}> Episode details</Link>
            </div>
        </>
    );
};

export {Episode};