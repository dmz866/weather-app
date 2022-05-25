import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/core/interfaces/weather/weather-response';

@Component({
	selector: 'app-weather-get',
	templateUrl: './weather-get.component.html',
	styleUrls: ['./weather-get.component.css']
})
export class WeatherGetComponent implements OnInit {
	@Input() weatherInformation: WeatherResponse | undefined;

	constructor() { }

	ngOnInit(): void {
	}

}
