import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserShowComponent } from './user-show/user-show.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: UsersComponent
    },
    {
        path: ':id',
        component: UserShowComponent
    },
    {
        path: '**',
        component: UsersComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
