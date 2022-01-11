import React from 'react';

import "./Launch.css"

const Launch = (props) => {
    const {mission_name, launch_year, photo} = props;
    return (
        <div>
            <div className={'info'}><h1>Mission name: {mission_name}</h1>
                <h2>Launch year: {launch_year}</h2></div>
            <div>
                <img className={'photo'} src={photo} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Launch;