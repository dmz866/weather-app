import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

	constructor() { }

	isLoggedIn(): boolean {
		return true;
	}
}
