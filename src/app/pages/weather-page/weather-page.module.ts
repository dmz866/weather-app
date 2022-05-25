import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WeatherGetComponent } from "./components/weather/weather-get/weather-get.component";
import { WeatherSearchComponent } from './components/weather/weather-search/weather-search.component';
import { WeatherContainerComponent } from "./weather-container/weather-container.component";
import { WeatherPageRoutingModule } from "./weather-page-routing.module";

@NgModule({
	declarations: [
		WeatherContainerComponent,
		WeatherGetComponent,
		WeatherSearchComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		WeatherPageRoutingModule,
	],
	providers: [
	],
	entryComponents: [
	],
})
export class WeatherPageModule { }
