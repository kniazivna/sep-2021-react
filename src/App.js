import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components"
import {CommentsPage, PostsPage, UsersPage} from "./Pages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;