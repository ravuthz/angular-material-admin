import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

}
