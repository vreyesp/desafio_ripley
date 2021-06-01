import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { VistaHomeComponent } from './vista-home/vista-home.component';
import { HomeRoutingModule } from './home.routing.module';




@NgModule({
    declarations: [VistaHomeComponent],
    imports: [
         CommonModule,
         HomeRoutingModule
    
        

    ]
})
export class HomeModule { }
