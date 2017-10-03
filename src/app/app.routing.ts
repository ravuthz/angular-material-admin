import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
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
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
