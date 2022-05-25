import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginPageRoutingModule } from "./login-page-routing.module";

@NgModule({
	declarations: [
		LoginContainerComponent,
		LoginComponent
	],
	imports: [
		ReactiveFormsModule,
		CommonModule,
		LoginPageRoutingModule,
	],
	providers: [
	],
	entryComponents: [
	],
})
export class LoginPageModule { }
