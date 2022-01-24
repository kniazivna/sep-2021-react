import React from 'react';

import css from "./EpisodeDetailsPage.module.css";
import {useLocation} from "react-router-dom";

const EpisodeDetailsPage = () => {

    const {state} = useLocation();
    const {name, episode, air_date, characters} = state;

    const charact = [...characters];
    console.log(charact);

    const newCharact = [];
    charact.map(value => newCharact.push(+value.slice(42,45)));
    console.log(newCharact);


    return (
        <>
            <div className={css.header}>
                <h1> {name} </h1>
                <p><span>Episode:</span> {episode}</p>
                <p><span>Air date:</span> {air_date}</p>
            </div>
            <div>
                {/*{*/}
                {/*    characters.map*/}
                {/*}*/}
            </div>
        </>
    );
}

export {EpisodeDetailsPage};