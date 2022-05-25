import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './components/weather/weather-search/weather-search.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';

const routes: Routes = [
	{
		path: '', component: WeatherContainerComponent,
		children: [
			{ path: '', component: WeatherSearchComponent }
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class WeatherPageRoutingModule { }
