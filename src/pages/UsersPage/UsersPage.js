import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.servise";
import User from "../../components/User/User";
import css from "./UsersPage.module.css";

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
                <div className={css.wrapper}>
                    <div className={css.usersBlock}>
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