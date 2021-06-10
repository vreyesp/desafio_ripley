import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias.routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng9RutModule } from 'ng9-rut';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { HistorialComponent } from './historial/historial.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { TransferirComponent } from './transferir/transferir.component';



@NgModule({
  imports: [
    CommonModule,
    TransferenciasRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    Ng9RutModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    AutocompleteLibModule
  ],
  declarations: [HistorialComponent, NuevoDestinatarioComponent, TransferirComponent],
})
export class TransferenciasModule { }
