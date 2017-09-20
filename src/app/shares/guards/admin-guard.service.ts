import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UNAUTHORIZE } from '../consts/auth.const';
import { AuthService } from '../services/auth.service';

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
