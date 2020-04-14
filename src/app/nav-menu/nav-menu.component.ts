import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {
  isExpanded = false;

  constructor(private router: Router, private userServico: UserService){

  }

   collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  public usuarioLogado(): boolean{    
    return true;//this.userServico.usuario_autenticado();
  }

  sair(){
    // this.userServico.limpar_sessao();
    this.router.navigate(['/']);
  }
  

}
