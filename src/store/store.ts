import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './slices/currentWetherSlice';

const rootReduser = combineReducers({ currentWeatherSliceReducer });

export const store = configureStore({
	reducer: rootReduser
});

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
