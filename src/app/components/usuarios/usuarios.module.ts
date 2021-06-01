import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { VistaUsuariosComponent } from './vista-usuarios/vista-usuarios.component';
import { UsuariosRoutingModule } from './usuarios.routing';
import { MatTableModule } from '@angular/material/table';




@NgModule({
    declarations: [VistaUsuariosComponent],
    imports: [
        // CommonModule,
        UsuariosRoutingModule,
        MatTableModule
        // ReactiveFormsModule,
        // MatInputModule,
        // MatFormFieldModule,
        // FormsModule,
        // VistaHomeRoutin

    ]
})
export class UsuariosModule { }
