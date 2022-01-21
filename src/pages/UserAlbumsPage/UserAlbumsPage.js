import React, {useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";

const UserAlbumsPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getUsersAlbums(id)
            .then(value => setAlbums([...value]))
    }, [id])

    const back = () => {
        navigate(-1);
    }

    return (
                <div>
                <button onClick={back}>Back</button>
                    {
                        albums.map(value =>
                            <div key={value.id}>
                                <div>
                                    <p>User id: {value.userId}</p>
                                    <p>Id: {value.id}</p>
                                    <h3>Title: {value.title}</h3>
                                </div>
                                <Link to={`${value.id.toString()}/photos`}>
                                    <button>Show photos</button>
                                </Link>
                            </div>
                        )
                    }
                <div>
                    <Outlet/>
                </div>
            </div>

    );
};


export {UserAlbumsPage};