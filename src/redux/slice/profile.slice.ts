import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {profileService} from "../../services";
import {IProfile} from "../../interfaces";

interface IProfileState<IProfile> {
    profile: IProfile| null
    loading: boolean
}

const initialState: IProfileState<IProfile> = {
    profile: null,
    loading: false,
};

const getProfile = createAsyncThunk<IProfile>(
    'profileSlice/getProfile',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await profileService.get();
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data);
        }
    }
);

const profileSlice = createSlice({
        name: 'newsSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getProfile.fulfilled, (state, action) => {
                    state.profile = action.payload
                    state.loading = false
                })
                .addCase(getProfile.pending, (state) => {
                    state.loading = true
                })
                .addCase(getProfile.rejected, (state) => {
                    state.loading = false
                })

    }
);

const {reducer: profileReducer} = profileSlice;
const profileAction = {
    getProfile,
};

export {profileReducer, profileAction};