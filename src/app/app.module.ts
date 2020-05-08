import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ListUsuarioComponent } from './user/list-usuario/list-usuario.component';
import { ListFinancesComponent } from './finances/list-finances/list-finances.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ConfigComponent } from './config/config.component';

import { UserService } from 'src/app/services/user/user.service';
import { NewUserComponent } from './user/new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    LoginComponent,
    ListUsuarioComponent,
    ListFinancesComponent,
    NavMenuComponent,
    ConfigComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
