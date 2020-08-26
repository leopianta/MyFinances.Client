import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "src/app/services/user/user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public ativar_spinner: boolean;
  public user;
  public userId;
  public mensagem: string;

  constructor(private userService: UserService, private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.user = new User();     
    var userIdSession = sessionStorage.getItem('userIdSession');
    if (userIdSession){
      this.userId = JSON.parse(userIdSession);
      this.getUserById(userIdSession);
      sessionStorage.removeItem("userIdSession");
    }
  }
  
   getUserById(Id) {
    return this.http.get("https://localhost:44395/api/user/"+Id).subscribe(result => {
      if(result){
          this.user = result;
        }
      }, error => console.error(error));  
    }

  salvar() {
    this.ativar_spinner = true; 
    console.log("Salvar:"+this.user);   
    if(this.user.id == null){
      console.log("Cadastro");
      this.userService.cadastrarUsuario(this.user)
      .subscribe(
          user_json => {
              this.userService.user = user_json          
          },
          err => {
              console.log(err.error);
              this.mensagem = err.error;
              this.ativar_spinner = false;
              alert('Erro ao salvar usuário');
          },
          () => {
            alert('Usuário salvo com sucesso!');
            this.ativar_spinner = false;
          },        
      );
    }else{
      console.log("Alterar");
      this.userService.alterarUsuario(this.user)
      .subscribe(
          user_json => {
              this.userService.user = user_json          
          },
          err => {
              console.log(err.error);
              this.mensagem = err.error;
              this.ativar_spinner = false;
              alert('Erro ao alterar usuário');
          },
          () => {
            alert('Usuário alterado com sucesso!');
            this.ativar_spinner = false;
          },        
      );
    }

    // this.userService.cadastrarUsuario(this.user)
    // .subscribe(
    //     user_json => {
    //         this.userService.user = user_json          
    //     },
    //     err => {
    //         console.log(err.error);
    //         this.mensagem = err.error;
    //         this.ativar_spinner = false;
    //         alert('Erro ao salvar usuário');
    //     },
    //     () => {
    //       alert('Usuário salvo com sucesso!');
    //       this.ativar_spinner = false;
    //     },        
    // );
  }

}
