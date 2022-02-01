import React from 'react';

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <p>Id: {id} --- Name: {name} --- Email: {email}</p>
            <p>Body: {body}</p>
            <hr/>
        </div>
    );
};

export {Comment};