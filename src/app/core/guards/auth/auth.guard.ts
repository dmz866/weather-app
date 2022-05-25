import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteConstants } from '../../constants/route-constants';
import { UserService } from '../../services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	constructor(private userService: UserService, private router: Router) { }

	canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const isLoggedIn = this.userService.isLoggedIn();

		if (isLoggedIn) {
			return true;
		}

		this.router.navigate([RouteConstants.LOGIN_ROUTE]);
		return false;
	}

}
