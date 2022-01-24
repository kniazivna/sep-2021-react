import React from 'react';

import css from "./EpisodeDetailsPage.module.css";
import {useLocation} from "react-router-dom";
import {Character} from "../../components";

const EpisodeDetailsPage = () => {

    const {state} = useLocation();
    const {name, episode, air_date, characters} = state;
    const charact = [...characters];
    const newCharacts = [];

    charact.map(value => newCharacts.push(+value.slice(42,45)))


    return (
        <>
            <div className={css.header}>
                <h1> {name} </h1>
                <p><span>Episode:</span> {episode}</p>
                <p><span>Air date:</span> {air_date}</p>
            </div>
            <div className={css.wrap}>
                {
                    newCharacts.map(value => <Character key={value} id={value}/>)

                }
            </div>
        </>
    );
}

export {EpisodeDetailsPage};