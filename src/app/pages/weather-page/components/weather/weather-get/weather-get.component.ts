import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/core/interfaces/weather/weather-response';

@Component({
	selector: 'app-weather-get',
	templateUrl: './weather-get.component.html',
	styleUrls: ['./weather-get.component.css']
})
export class WeatherGetComponent implements OnInit {
	@Input() weatherInformation: WeatherResponse | undefined;
	@Input() temperatureMax: number | undefined;

	weatherAlertMessage: string | undefined;

	constructor() { }

	ngOnInit(): void {
		this.checkLocationTemperature();
	}

	checkLocationTemperature(): void {
		if (this.weatherInformation && this.temperatureMax &&
			this.weatherInformation.current.temperature > this.temperatureMax) {
			this.weatherAlertMessage = `${this.weatherInformation.location.name} is hotter than ${this.temperatureMax} degrees.`;
		}
	}
}
