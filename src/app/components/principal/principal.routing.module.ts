import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

const routes: Routes = [
  { path: '', component: VistaPrincipalComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
