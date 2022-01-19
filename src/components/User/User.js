import React from 'react';
import {Link} from "react-router-dom";

import css from "./User.module.css"


const User = ({user}) => {

    const {id, name} = user;
    return (
        <div className={css.user}>
            <Link to={id.toString()} state={user}>Show user details</Link>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default User;