import React from 'react';

const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div>
            <p>{id}--{name}--{username}</p>
            <hr/>
        </div>
    );
};

export {User};