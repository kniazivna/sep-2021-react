import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;