import { WeatherCurrent } from "./weather-current";
import { WeatherLocation } from "./weather-location";
import { WeatherRequest } from "./weather-request";

export interface WeatherResponse {
	request: WeatherRequest;
	location: WeatherLocation;
	current: WeatherCurrent;
}