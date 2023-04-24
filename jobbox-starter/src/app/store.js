import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice';
import { postSlice } from '../features/RTK_Query';
import userSlice from '../features/userSlice';
const store = configureStore({
    reducer: {
        user: userSlice,
        jobs: jobSlice,
        [postSlice.reducerPath]: postSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postSlice.middleware, logger)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postSlice.middleware)
})

export default store