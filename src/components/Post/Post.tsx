import React, {FC} from 'react';
import {IPost} from "../../interfaces";

const Post:FC<{post:IPost}> = ({post:{id, title}}) => {
    return (
        <div>
            <p>Post id: {id} --- Title: {title}</p>
            <hr/>
        </div>
    );
};

export {Post};