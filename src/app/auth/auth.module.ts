import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export const TOKEN_NAME = 'token';

export const routerConfig = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
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
    },
    {
        path: '**',
        component: LoginComponent
    }
];

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
    ]
})
export class AuthModule { }
