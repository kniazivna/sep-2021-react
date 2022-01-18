import React from 'react';
import {Link} from "react-router-dom";


const User = ({user}) => {

    const {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user}>Id: {id}</Link>
            <h3>Name: {name}</h3>
            <hr/>
        </div>
    );
};

export default User;