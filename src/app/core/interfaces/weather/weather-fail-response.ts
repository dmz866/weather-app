import { WeatherError } from "./weather-error";

export interface WeatherFailResponse {
	success: boolean;
	error: WeatherError;
}