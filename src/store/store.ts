//'use client';

// src/app/store/store.js
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import rootReducer from './reducer';
import { initialState } from './reducer/formReducer';

export const store = configureStore({
    reducer:rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
