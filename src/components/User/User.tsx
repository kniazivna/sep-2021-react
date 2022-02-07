import React, {FC} from 'react';
import {IUser} from "../../interfaces";

const User:FC<{user:IUser}> = ({user:{id, name, username}}) => {
    return (
        <div>
            <p>{id}--{name}--{username}</p>
            <hr/>
        </div>
    );
};

export {User};