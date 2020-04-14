import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardaRotas } from './authorization/guarda.rotas';

import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './user/list-usuario/list-usuario.component';
import { ListFinancesComponent } from './finances/list-finances/list-finances.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },
   { path: 'inicio', component: InicioComponent, canActivate: [GuardaRotas] },
   { path: 'login', component: LoginComponent },
   { path: 'users', component: ListUsuarioComponent, canActivate: [GuardaRotas] },
   { path: 'finances', component: ListFinancesComponent, canActivate: [GuardaRotas] },
  //{ path: 'inicio', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
