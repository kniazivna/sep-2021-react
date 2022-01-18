import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {


    return (
        <>
         <Routes>
             <Route path={'/'} element={<Layout/>}>
                 <Route path={'/'} element={<UsersPage/>}/>
                 <Route path={'posts'} element={<PostsPage/>}/>
                 <Route path={':id'} element={<PostsPage/>}/>
                 <Route path={'*'} element={<NotFoundPage/>}/>
             </Route>
         </Routes>
        </>
);
    }


export default App;
