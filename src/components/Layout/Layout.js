import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./Layout.module.css";


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <Link to="/">Users</Link>
                <Link to="posts">Posts</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;