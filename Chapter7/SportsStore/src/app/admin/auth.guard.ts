import { AuthService } from './../model/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private auth: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticate) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }
}
