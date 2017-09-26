import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MD_ERROR_GLOBAL_OPTIONS, MdDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { PostsComponent } from './posts/posts.component';
import { InputComponent } from './shares/components/input/input.component';
import { FormSearchComponent } from './shares/components/single-search.component';
import { customShowOnDirtyErrorStateMatcher } from './shares/consts/form-validator';
import { AdminGuardService } from './shares/guards/admin-guard.service';
import { AuthGuardService } from './shares/guards/auth-guard.service';
import { AuthService } from './shares/services/auth.service';
import { JsonHolderService } from './shares/services/json-holder/json-holder.service';
import { LocalStorageService } from './shares/services/local-storage.service';
import { UserService } from './shares/services/user.service';
import { TodosComponent } from './todos/todos.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        UsersComponent,
        TodosComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        DashboardComponent,
        PageLayoutComponent,
        ContentLayoutComponent,
        UnauthorizedComponent,
        UserListComponent,
        UserFormComponent,
        InputComponent,
        FormSearchComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        AppRouteModule,
        MaterialModule,
        MdDialogModule,
        FlexLayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [
        UserService,
        AuthService,
        AuthGuardService,
        AdminGuardService,
        JsonHolderService,
        LocalStorageService,
        // Set global validate checker (errorStateMatcher)
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: customShowOnDirtyErrorStateMatcher } }
    ],
    entryComponents: [
        UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
