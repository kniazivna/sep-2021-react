import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {commentsService} from "../services";


export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = await commentsService.getAll();
            return comments;
        } catch (e) {
            return rejectWithValue(e.message);
        }

    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'Loading/pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})


const commentsReducer = commentsSlice.reducer;

export const {} = commentsSlice.actions;

export default commentsReducer;

