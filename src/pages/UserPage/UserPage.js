import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {usersService} from "../../services/users.servise";


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

        <div>
            <button onClick={back}>Back</button>
            {user && (
                <div>
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <h3>Username: {user.username}</h3>
                    <button>User details</button>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UserPage;