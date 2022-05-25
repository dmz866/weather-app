import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherError } from 'src/app/core/interfaces/weather/weather-error';
import { WeatherFailResponse } from 'src/app/core/interfaces/weather/weather-fail-response';
import { WeatherResponse } from 'src/app/core/interfaces/weather/weather-response';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
	selector: 'app-weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit, OnDestroy {
	weatherInformation: WeatherResponse | undefined;
	weatherFailInformation: WeatherError | undefined;
	location: string | undefined;
	subscriptionsToRemove: Subscription = new Subscription();
	temperatureMax: number = 20;

	constructor(private weatherService: WeatherService) { }

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		if (this.subscriptionsToRemove) {
			this.subscriptionsToRemove.unsubscribe();
		}
	}

	getWeatherByLocation(location: string | undefined): void {
		this.weatherInformation = undefined;
		this.weatherFailInformation = undefined;

		if (location) {
			this.weatherService.get(location).subscribe(result => {
				if (!(result as WeatherFailResponse).success && (result as WeatherFailResponse).error) {
					this.weatherFailInformation = (result as WeatherFailResponse).error;
				}
				else if (result as WeatherResponse) {
					this.weatherInformation = result as WeatherResponse;
				}
			});
		}
	}
}
