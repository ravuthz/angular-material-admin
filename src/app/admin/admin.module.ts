import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin/admin.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule
    ],
    exports: [
        AdminComponent
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
