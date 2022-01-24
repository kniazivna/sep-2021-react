import React, {useEffect, useState} from 'react';

import {charactersServise} from "../../services/characters.service";
import css from "./Character.module.css";

const Character = ({id}) => {

    const [character, setCharacter] = useState(null);//не розумію, чому як замість null прописую {}, то відпрацьовує раз, а після оновлення сторінки помилка

    useEffect(() => {
        charactersServise.getById(id)
            .then(value => setCharacter({...value}));

    }, [])

    return (
        <div className={css.wrap}>
            {
                character && (
                    <div className={css.character}>
                        <div className={css.photo}>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h2>{character.name}</h2>
                            <p><span>Status: </span>{character.status}</p>
                            <p><span>Species: </span>{character.species}</p>
                            <p><span>Gender: </span>{character.gender}</p>
                            <p><span>Origin: </span>{character.origin.name}</p>
                            <p><span>Location: </span>{character.location.name}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};


export {Character};