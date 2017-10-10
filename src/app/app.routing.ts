import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { P401Component } from './errors/p401/p401.component';
import { P404Component } from './errors/p404/p404.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentLayoutComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
        , canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: 'unauthorize',
        component: P401Component
    },
    {
        path: '**',
        component: P404Component
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
