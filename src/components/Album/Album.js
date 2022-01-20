import React from 'react';


const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div>
            <div>
                <p>User id: {userId}</p>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
            </div>
            <button>Show photos</button>
        </div>
    );
};

export default Album;

