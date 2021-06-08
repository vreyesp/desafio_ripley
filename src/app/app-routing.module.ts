import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    // {
    //     path: 'home',
    //     loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    // },
    {
        path: '',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
    },

    {
        path: '',
        loadChildren: () => import('./components/shared.module').then(m => m.SharedModule),
    },
    // {
    //     path: 'usuarios',
    //     loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule),
    // },
    // { path: '', component: LoginComponent },



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
