import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
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
import { AuthService } from './shares/services/auth.service';
import { JsonHolderService } from './shares/services/json-holder/json-holder.service';
import { LocalStorageService } from './shares/services/local-storage.service';
import { UserService } from './shares/services/user.service';
import { TodosComponent } from './todos/todos.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
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
        UnauthorizedComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        AppRouteModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [JsonHolderService, UserService, AuthService, LocalStorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
