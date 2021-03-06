import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MaterialModule,
    MD_ERROR_GLOBAL_OPTIONS,
    MdCardModule,
    MdChipsModule,
    MdDialogModule,
    MdSidenavModule,
    MdToolbarModule,
} from '@angular/material';

import { InputErrorComponent } from './components/input-error.component';
import { SimplePagerComponent } from './components/simple-pager.component';
import { SingleSearchComponent } from './components/single-search.component';
import { customShowOnDirtyErrorStateMatcher } from './consts/form-validator';
import { AuthGuard } from './guards/auth.guard';
import { StorageService } from './services/storage.service';
import { TokenStoreService } from './services/token-store.service';

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

        MdChipsModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule,

        FormsModule,
        ReactiveFormsModule,
        SimplePagerComponent,
        SingleSearchComponent
    ],
    declarations: [
        SimplePagerComponent,
        SingleSearchComponent,
        InputErrorComponent
    ],
    providers: [
        AuthGuard,
        StorageService,
        TokenStoreService,
        // Set global validate checker (errorStateMatcher)
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: customShowOnDirtyErrorStateMatcher } }
    ]
})
export class SharedModule { }
