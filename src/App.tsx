import React, {FC} from "react";
import {Route, Routes} from "react-router";

import {MainLayout} from "./layouts";
import {HomePage, NewsPage, ProfilePage} from "./pages";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/news'} element={<NewsPage/>}/>
                <Route path={'/profile'} element={<ProfilePage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
