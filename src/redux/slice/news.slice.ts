import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {postService} from "../../services";
import {IPost} from "../../interfaces";

interface INewsState<IPost> {
    news: IPost[] | []
    newsById: IPost | null
    loading: boolean
}

interface IGetAll {
    _limit: string | number | null;
}

const initialState: INewsState<IPost> = {
    news: [],
    newsById: null,
    loading: false,
};

const getAll = createAsyncThunk<IPost[], IGetAll>(
    'newsSlice/getAll',

    async ({_limit}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll(_limit);
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
        reducers: {
            deleteById: (state, action) => {
                const index = state.news.findIndex(oneNews => oneNews.id === action.payload)
                state.news.splice(index, 1)
            }
        },
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

const {reducer: newsReducer, actions:{deleteById}} = newsSlice;
const newsAction = {
    getAll,
    deleteById
};

export {newsReducer, newsAction};