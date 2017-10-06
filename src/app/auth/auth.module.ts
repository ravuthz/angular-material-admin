import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export const TOKEN_NAME = 'token';

export const routerConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: TOKEN_NAME,
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: true,
        noTokenScheme: true,
        tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
    }), http, options);
}

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegisterComponent
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})
export class AuthModule { }
