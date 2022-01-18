import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";


function App() {


    return (
        <>
         <Routes>
             <Route path={'/'} element={<Layout/>}>
                 <Route path={'/'} element={<UsersPage/>}/>
               <Route path={'posts'} element={<PostsPage/>}>
                   <Route path={':id'} element={<PostPage/>}/>
               </Route>
                 <Route path={'*'} element={<NotFoundPage/>}/>
             </Route>
         </Routes>
        </>
);
    }


export default App;
