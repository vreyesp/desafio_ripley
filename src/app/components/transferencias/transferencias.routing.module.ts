import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { NuevoDestinatarioComponent } from './nuevo-destinatario/nuevo-destinatario.component';
import { TransferirComponent } from './transferir/transferir.component';

const routes: Routes = [
    { path: 'historial', component: HistorialComponent },
    { path: 'nuevo-destinatario', component: NuevoDestinatarioComponent },
    { path: 'transferir', component: TransferirComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransferenciasRoutingModule { }
