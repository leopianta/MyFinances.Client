import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardaRotas } from './authorization/guarda.rotas';

import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './user/list-usuario/list-usuario.component';
import { ListFinancesComponent } from './finances/list-finances/list-finances.component';
import { ConfigComponent } from './config/config.component';


const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full', canActivate: [GuardaRotas] },
   { path: 'inicio', component: InicioComponent, canActivate: [GuardaRotas] },
   { path: 'login', component: LoginComponent },
   { path: 'users', component: ListUsuarioComponent, canActivate: [GuardaRotas] },
   { path: 'finances', component: ListFinancesComponent, canActivate: [GuardaRotas] },
   { path: 'config', component: ConfigComponent, canActivate: [GuardaRotas] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
