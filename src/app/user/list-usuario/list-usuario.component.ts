import { Component, OnInit } from '@angular/core';
// import {Injectable, Inject} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "src/app/models/user";


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})

// @Injectable({
//   providedIn: 'root'
// })

export class ListUsuarioComponent implements OnInit {
  public users: User[];
  public user;
  private baseURL: string;
  // private _user: User;

  // constructor() { }
  constructor(private http: HttpClient){
    // baseUrl = "https://localhost:44395/"; //retirar depois       
    // this.baseURL = "https://localhost:44395/";    
    this.getUsers();          
}

public getUsers(){ 
  return this.http.get<User[]>("https://localhost:44395/api/user").subscribe(result => {
    this.users = result;
  }, error => console.error(error));
} 

  ngOnInit(): void {
    this.user = new User();
  }

Excluir() {
  // alert("ID: " + Id);
  return this.http.get<boolean>("https://localhost:44395/api/user/DeleteUser/2"); 
  this.getUsers();  
  }
}
