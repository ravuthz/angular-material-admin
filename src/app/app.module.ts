import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { P401Component } from './errors/p401/p401.component';
import { P404Component } from './errors/p404/p404.component';
import { P500Component } from './errors/p500/p500.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { ErrorMessageService } from './shared/services/error-message.service';
import { FormValidatorService } from './shared/services/form-validator.service';
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
        P404Component,
        P401Component,
        P500Component
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
        UserService,
        ErrorMessageService,
        FormValidatorService,
    ],
    entryComponents: [
        UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
