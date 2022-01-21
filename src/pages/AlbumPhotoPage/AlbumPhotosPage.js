import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {photosService} from "../../services/photos.servise";
import {Photo} from "../../components";


const AlbumPhotosPage = () => {

     const {albumId} = useParams();
    console.log(albumId);
    const [photos,setPhotos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        photosService.getById(albumId)
            .then(value => setPhotos([...value]))
    },[albumId])

    const back = () => {
        navigate(-1);
    }


    return (
        <div>
            <button onClick={back}>Back</button>
            <div>
                {
                photos.map(value => <Photo key={value.id} photo={value}/>)
            }
            </div>
        </div>
    );
};

export {AlbumPhotosPage};