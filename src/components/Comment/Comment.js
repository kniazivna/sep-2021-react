import React from 'react';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <p>Post id: {postId}</p>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};