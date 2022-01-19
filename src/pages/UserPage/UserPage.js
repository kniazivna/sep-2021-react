import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {usersService} from "../../services/users.servise";
import css from "./UserPage.module.css";

const UserPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);


    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setUser(state);
            return
        }
        usersService.getById(id)
            .then(value => setUser({...value}));
    }, [])

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={css.usersBlock}>
            <button onClick={back}>Back</button>
            {user && (
                <div>
                    <ul>
                        <li>Id: {user.id}</li>
                        <li>Name: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Address:</li>
                        <ul>
                            <li>Street: {user.address.street}} </li>
                            <li>Suite: {user.address.suite}} </li>
                            <li>City: {user.address.city}} </li>
                            <li>Zipcode: {user.address.zipcode}} </li>
                            <li>Geo:</li>
                            <ul>
                                <li>Lat: {user.address.geo.lat} </li>
                                <li>Lng: {user.address.geo.lng} </li>
                            </ul>
                        </ul>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                        <li>Company:</li>
                        <ul>
                            <li>Company name: {user.company.name}</li>
                            <li>CatchPhrase: {user.company.catchPhrase}</li>
                            <li>Bs: {user.company.bs}</li>
                        </ul>
                    </ul>
                   <Link to={'posts'}><button>Show user's posts</button></Link>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UserPage;