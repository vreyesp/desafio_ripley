import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { PrincipalRoutingModule } from './principal.routing.module';
import {MatCardModule} from '@angular/material/card';




@NgModule({
    declarations: [VistaPrincipalComponent],
    imports: [
        PrincipalRoutingModule,
        MatCardModule 
      // CommonModule,
        // AutentificacionRoutingModule,
        // ReactiveFormsModule,
        // MatInputModule,
        // MatFormFieldModule,
        // FormsModule,
        // VistaHomeRoutin

    ]
})
export class PrincipalModule { }
