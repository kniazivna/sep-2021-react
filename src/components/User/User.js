import React from 'react';

import './User.css'

const User = ({user,getUser}) => {

    const {id,name, username} = user;

    return (
        <div className={'user'}>
            <p>Id: {id}--{name}--{username}</p>
            <button onClick={() => getUser(user)}>User details</button>
        </div>
    );
};

export default User;