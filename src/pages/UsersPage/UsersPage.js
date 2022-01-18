import React, {useEffect, useState} from 'react';

import {Outlet} from "react-router-dom";
import css from "./UserPage.module.css"
import {usersService} from "../../services/users.servise";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll()
            .then(value => setUsers([...value]));
    }, [])
    return (
        <div>
            <h1>Users page</h1>
            <div>
                <h1>Users page</h1>
                <div className={css.wrapper}>
                    <div>
                        {
                            users.map(value => <User key={value.id} user={value}/>)
                        }
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;