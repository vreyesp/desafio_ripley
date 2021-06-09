import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [


    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'main-layout',
        loadChildren: () => import('./components/main-layout/main-layout.module').then(m => m.MainLayoutModule),
    },


    {
        path: 'home',
        component: PrincipalComponent,
        children: [
            {




                path: '',
                loadChildren: () => import('./components/transferencias/transferencias.module').then(m => m.TransferenciasModule),


            }


        ]
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
