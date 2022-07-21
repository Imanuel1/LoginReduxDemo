import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUser } from "./userAPI"

const initialState = {
    userName: 'iman',
    phoneNumber: '0507026234',
    password: '123',
}

export const submitUserAsync = createAsyncThunk(
    'user/submitUser',
    async (data) => {
        const response = await fetchUser(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitUserAsync.fulfilled, (state, action) => {
                Object.assign(state, action.payload);
            });
    },
})

export const selectUser = (state) => state.user;

export default userSlice.reducer