import { NgModule } from '@angular/core';
import {    MzValidationModule, 
            MzInputModule, 
            MzTextareaModule, 
            MzNavbarModule, 
            MzDropdownModule,
            MzButtonModule,
            MzSpinnerModule  } from 'ngx-materialize';

@NgModule({
    exports: [
            MzValidationModule, 
            MzInputModule, 
            MzTextareaModule, 
            MzNavbarModule,
            MzDropdownModule,
            MzButtonModule,
            MzSpinnerModule
    ]
})

export class MaterializeModule {

}