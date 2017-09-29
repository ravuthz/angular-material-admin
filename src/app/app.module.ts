import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { SharedModule } from './shared/shared.module';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserService } from './users/user.service';
import { UsersModule } from './users/users.module';

@NgModule({
    declarations: [
        AppComponent,
        MenubarComponent,
        DashboardComponent,
        PageLayoutComponent,
        ContentLayoutComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        UsersModule,
        AuthModule
    ],
    providers: [
        AuthService,
        UserService
    ],
    entryComponents: [
        UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
