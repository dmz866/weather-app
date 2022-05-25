import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherFailResponse } from '../../interfaces/weather/weather-fail-response';
import { WeatherResponse } from '../../interfaces/weather/weather-response';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) { }

	get(location: string): Observable<WeatherResponse | WeatherFailResponse> {
		return this.http.get<WeatherResponse | WeatherFailResponse>
			(`${environment.WEATHER_API_URL}?access_key=${environment.WEATHER_API_KEY}&query=${location}`);
	}
}
