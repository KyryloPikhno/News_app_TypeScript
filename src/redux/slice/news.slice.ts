import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {postService} from "../../services";
import {IPost} from "../../interfaces";

interface INewsState<IPost> {
    news: IPost[]
    loading: boolean
}

const initialState: INewsState<IPost> = {
    news: [],
    loading: false,
};

const getAll = createAsyncThunk<IPost[], void>(
    'newsSlice/getAll',

    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data);
        }
    }
);

const newsSlice = createSlice({
        name: 'newsSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.news = action.payload
                    state.loading = false
                })
                .addCase(getAll.pending, (state) => {
                    state.loading = true
                })
                .addCase(getAll.rejected, (state) => {
                    state.loading = false
                })
    }
);

const {reducer: newsReducer} = newsSlice;

const newsAction = {
    getAll,
};

export {newsReducer, newsAction};