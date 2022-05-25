import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './core/constants/route-constants';

const routes: Routes = [
	{ path: RouteConstants.LOGIN_ROUTE, loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
	{ path: RouteConstants.WEATHER_ROUTE, loadChildren: () => import('./pages/weather-page/weather-page.module').then(m => m.WeatherPageModule) },

	{ path: '**', redirectTo: RouteConstants.LOGIN_ROUTE },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
