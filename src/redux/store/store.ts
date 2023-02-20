import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {profileReducer} from '../slice/profile.slice';
import {newsReducer} from "../slice/news.slice";

const rootReducer = combineReducers({
    profileReducer,
    newsReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {setUpStore};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setUpStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    AppDispatch,
    RootState,
    AppStore,
};