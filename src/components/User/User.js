import React from 'react';

import css from "./User.module.css"
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username} = user;
    return (
        <div>
           <p>{id}--{name}--{username}</p>
            <div className={css.btns}>
                <Link to={id.toString()} state={user}>
                    <button>User details </button>
                </Link>
                <Link to={`${id.toString()}/albums`} state={user}>
                    <button>User albums</button>
                </Link>
            </div>
        </div>
    );
};

export default User;