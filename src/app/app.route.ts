import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { PostsComponent } from './posts/posts.component';
import { UNAUTHORIZE } from './shares/consts/auth.const';
import { TodosComponent } from './todos/todos.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        component: PageLayoutComponent,
        children: [
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
        ]
    },
    {
        path: '',
        component: ContentLayoutComponent,
        // canActivate: [AuthGuardService],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'posts',
                component: PostsComponent
            },
            {
                path: 'todos',
                component: TodosComponent
            }
        ]
    },
    { path: UNAUTHORIZE, component: UnauthorizedComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule { }
