import React, {useEffect, useState} from 'react';
import {charactersServise} from "../../services/characters.service";
import {Character} from "../Character/Character";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        charactersServise.getAll()
            .then(value => setCharacters([...value.result]));

    },[])

    return (
        <div>
            {
                characters.map(value => <Character key={value.id} character={value}/>)
            }
        </div>
    );
};


export {Characters};