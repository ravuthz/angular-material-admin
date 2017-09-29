import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MD_ERROR_GLOBAL_OPTIONS, MdDialogModule } from '@angular/material';

import { SimplePagerComponent } from './components/simple-pager.component';
import { SingleSearchComponent } from './components/single-search.component';
import { customShowOnDirtyErrorStateMatcher } from './consts/form-validator';
import { AdminGuardService } from './guards/admin-guard.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { StorageService } from './services/storage.service';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        HttpClientModule,
        MaterialModule,
        MdDialogModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
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
        AuthGuardService,
        AdminGuardService,
        // Set global validate checker (errorStateMatcher)
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: customShowOnDirtyErrorStateMatcher } }
    ]
})
export class SharedModule { }
