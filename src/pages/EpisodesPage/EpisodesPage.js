import React, {useEffect, useState} from 'react';

import {episodesService} from "../../services/episodes.services";
import {Episode} from "../../components";
import css from "./EpisodesPage.module.css"

const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodesService.getAll()
            .then(value => setEpisodes([...value.results]))
    }, [])

    return (
        <>
            <div className={css.header}>
                <h1> The Rick and Morty episodes</h1>
            </div>
            <div className={css.wrap}>
                {
                    episodes.map(value => <Episode key={value.id} episod={value}/>)
                }
            </div>
        </>
    );
};


export {EpisodesPage};