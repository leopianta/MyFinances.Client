import { Component, OnInit } from '@angular/core';
import { User } from "../../app/models/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";
import {ElementRef } from "@angular/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spinner: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService, private el: ElementRef) {        
  }
  
   ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.queryParams["returnUrl"]);
      this.returnUrl = this.activatedRouter.snapshot.queryParams["returnUrl"];
      this.user = new User();
  }



  entrar() {
    this.ativar_spinner = true;
    this.userService.validateUser(this.user)
    .subscribe(
        user_json => {
            this.userService.user = user_json
            if(this.returnUrl == null){
                this.router.navigate(['/inicio']);
            }else{
                this.router.navigate([this.returnUrl]);
            }           
        },
        err => {
            console.log(err.error);
            this.mensagem = err.error;
            this.ativar_spinner = false;
            alert('Login ou senha incorretos');
        }
    );
  }
}
