import axios, { AxiosResponse } from 'axios';
import { Weather } from 'src/store/types/type';

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return axios.get<Weather>(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb9bf06e660476f60818ef80c3bb77a9`
		);
	}
}
