import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaHomeComponent } from './vista-home/vista-home.component';

const routes: Routes = [
  { path: '', component: VistaHomeComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
