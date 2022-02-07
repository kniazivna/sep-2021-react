import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {UsersPage, PostsPage} from "./pages";

const App:FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};