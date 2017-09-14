import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouteModule } from './app.route';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { JsonHolderService } from './shares/services/json-holder/json-holder.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PostsComponent,
        UsersComponent,
        TodosComponent
    ],
    imports: [
        AppRouteModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [JsonHolderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
