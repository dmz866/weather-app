import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/core/constants/route-constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form!: FormGroup;

	constructor(private router: Router) {
		this.buildForm();
	}

	ngOnInit(): void {
	}

	buildForm() {
		this.form = new FormGroup({
			user: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
		});
	}

	login(): void {
		if (!this.form.valid) return;

		this.router.navigate([RouteConstants.WEATHER_ROUTE]);
	}
}
