import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaUsuariosComponent } from './vista-usuarios/vista-usuarios.component';

const routes: Routes = [
    { path: '', component: VistaUsuariosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }
