import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersService} from "../services";


export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll();
            return users;
        } catch (e) {
            return rejectWithValue(e.message);
        }

    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'Loading/pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const usersReducer = usersSlice.reducer;

export const {} = usersSlice.actions;

export default usersReducer;

