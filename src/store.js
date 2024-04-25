// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './pages/alluser/modalSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
});

