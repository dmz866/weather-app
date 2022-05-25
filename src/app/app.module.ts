import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { WeatherPageModule } from "./pages/weather-page/weather-page.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		LoginPageModule,
		WeatherPageModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
