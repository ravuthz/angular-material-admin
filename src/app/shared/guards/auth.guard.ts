import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';
import { UNAUTHORIZE_PATH } from '../consts/auth.const';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return this.auth.isLoggedIn();
        if (this.auth.isLoggedIn()) {
            this.router.navigateByUrl(UNAUTHORIZE_PATH);
            return true;
        }
        return false;
    }
}
