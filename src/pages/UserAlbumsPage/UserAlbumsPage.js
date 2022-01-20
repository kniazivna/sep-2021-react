import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {albumsService} from "../../services/albums.service";
import Album from "../../components/Album/Album";

const UserAlbumsPage = () => {

const {id} = useParams();
const [albums,setAlbums] = useState([]);

useEffect(() => {
    albumsService.getUsersAlbums(id)
        .then(value => setAlbums(value))
},[id])

    return (
        <div>
            {
                albums.map(value => <Album key={value.id} album={value}/>)
            }

            <Outlet/>
        </div>
    );
};

export {UserAlbumsPage};