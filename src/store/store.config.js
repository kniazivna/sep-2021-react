import {configureStore} from '@reduxjs/toolkit';

import commentsReducer from "./comments.slice";
import postsReducer from "./posts.slice";
import usersReducer from "./users.slice";

const store = configureStore({
    reducer: {
        commentsReducer,
        postsReducer,
        usersReducer
    }
})

export default store;