import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { UNAUTHORIZE } from '../consts/auth.const';

@Injectable()
export class AdminGuardService implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.isAdmin()) {
            return true;
        }
        this.router.navigateByUrl(UNAUTHORIZE);
        return false;
    }

}
