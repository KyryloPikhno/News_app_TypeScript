import React, {FC} from "react";
import {Route, Routes} from "react-router";

import {HomePage, LoginPage, NewsDetailsPage, NewsPage, ProfilePage} from "./pages";
import {MainLayout} from "./layouts";
import {PrivateRoute} from "./utils";



const App: FC = () => {



    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/news'} element={<NewsPage/>}/>
                <Route path={'/news/:id'} element={<NewsDetailsPage/>}/>
                <Route path={'/profile'} element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
            </Route>
        </Routes>
    );
};

export default App;
