import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserRoutingModule } from './users.routing';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        UserRoutingModule
    ],
    exports: [
        UsersComponent
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserFormComponent,
        UserShowComponent,
        UserSearchComponent
    ],
    providers: [
        // oAuthInterceptorProvider
        // { provide: HTTP_INTERCEPTORS, useClass: OAuthInterceptor, multi: true }
    ]
})
export class UsersModule { }
