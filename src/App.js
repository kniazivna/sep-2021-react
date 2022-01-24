import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {EpisodeDetailsPage, EpisodesPage} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<EpisodesPage/>}/>
                    <Route path={':id'} element={<EpisodeDetailsPage/>}/>

                </Route>
            </Routes>

        </>
    );
}

export default App;
