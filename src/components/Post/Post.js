import React from 'react';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <p>Post id: {id} --- Title: {title}</p>
            <hr/>
        </div>
    );
};

export {Post};