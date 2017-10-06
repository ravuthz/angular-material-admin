import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';
import { LOGIN_SUCCESS_PATH, UNAUTHORIZE_PATH } from '../consts/auth.const';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl(LOGIN_SUCCESS_PATH);
            return true;
        }
        this.router.navigateByUrl(UNAUTHORIZE_PATH);
        return false;
    }
}
