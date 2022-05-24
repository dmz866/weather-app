import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginPageRoutingModule } from "./login-page-routing.module";

@NgModule({
	declarations: [
		LoginContainerComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		LoginPageRoutingModule,
	],
	providers: [
	],
	entryComponents: [
	],
})
export class LoginPageModule { }
