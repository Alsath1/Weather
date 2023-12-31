import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../types/type';

type CurrentWeather = {
	weather: Weather;
	isLoading: boolean;
	response: Response;
};

type Response = {
	status: number;
	message: string;
};

const initialState: CurrentWeather = {
	weather: {
		data: {
			main: { temp: 1 },
			wind: { speed: 1 }
		}
	},
	isLoading: false,
	response: {
		status: 0,
		message: ''
	}
};

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSuccess(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.weather = action.payload;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText
			};
		}
	}
});

export default currentWeatherSlice.reducer;
