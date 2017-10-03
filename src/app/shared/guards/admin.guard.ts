import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAdmin();
        // if (this.auth.isAdmin()) {
        //     this.router.navigateByUrl(UNAUTHORIZE_PATH);
        //     return true;
        // }
        // return false;
    }
}
