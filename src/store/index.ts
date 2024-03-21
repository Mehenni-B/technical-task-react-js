import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import {
    mealReducer
} from './slices/_index';

const store = configureStore({
    reducer: {
        meal: mealReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;