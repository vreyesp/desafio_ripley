import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared.module';



@NgModule({
    declarations: [LoginComponent],
    imports: [

        SharedModule,
        AuthRoutingModule,



    ]
})
export class AuthModule { }
