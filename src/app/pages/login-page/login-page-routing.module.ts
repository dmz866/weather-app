import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './login-container/login-container.component';

const routes: Routes = [
	{
		path: '', component: LoginContainerComponent,
		children: [
			{ path: '', component: LoginComponent },
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
export class LoginPageRoutingModule { }
