import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";


function App() {


    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserPage/>}>
                            <Route path={':userId'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostPage/>}>
                            <Route path={':postId'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}


export default App;
