import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial/historial.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { TransferirComponent } from './transferir/transferir.component';
import { TransferenciasRoutingModule } from './transferencias.routing.module';



@NgModule({
  declarations: [HistorialComponent, NuevoDestinatarioComponent, TransferirComponent],
  imports: [
    CommonModule,
    TransferenciasRoutingModule
  ]
})
export class TransferenciasModule { }
