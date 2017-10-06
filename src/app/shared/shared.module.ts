import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MD_ERROR_GLOBAL_OPTIONS, MdDialogModule } from '@angular/material';

import { OAuthInterceptor } from '../auth/auth.service';
import { SimplePagerComponent } from './components/simple-pager.component';
import { SingleSearchComponent } from './components/single-search.component';
import { customShowOnDirtyErrorStateMatcher } from './consts/form-validator';
import { AuthGuard } from './guards/auth.guard';
import { StorageService } from './services/storage.service';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FlexLayoutModule,
        HttpClientModule,
        MaterialModule,
        MdDialogModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HttpModule,
        CommonModule,
        FlexLayoutModule,
        HttpClientModule,
        MaterialModule,
        MdDialogModule,
        FormsModule,
        ReactiveFormsModule,
        SimplePagerComponent,
        SingleSearchComponent
    ],
    declarations: [
        SimplePagerComponent,
        SingleSearchComponent
    ],
    providers: [
        StorageService,
        AuthGuard,
        // Set global validate checker (errorStateMatcher)
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: customShowOnDirtyErrorStateMatcher } },
        { provide: HTTP_INTERCEPTORS, useClass: OAuthInterceptor, multi: true }
    ]
})
export class SharedModule { }
