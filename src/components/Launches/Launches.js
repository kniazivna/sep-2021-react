import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";

const Launches = () => {
    const[launches, setLaunches] = useState([]);
    // console.log(launches);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launches => {
                const filteredLaunches = launches.filter(launch => launch.launch_year !== '2020');
                setLaunches(filteredLaunches)
            })
    } ,[])


    return (
        <div>
            {launches.map(item =>
                <Launch key={item.mission_name}//уточніть,будь ласка, key має тут бути чи перед <Launch після =>, юо не до кінця зрозуміла
                        mission_name={item.mission_name}
                        launch_year={item.launch_year}
                        photo={item.links.mission_patch_small}
                />

                )}
        </div>
    );
};

export default Launches;