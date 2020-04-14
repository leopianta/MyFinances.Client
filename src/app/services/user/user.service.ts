import {Injectable, Inject} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from "src/app/models/user";


@Injectable({
  providedIn: 'root'
})

export class UserService {
    
  private baseURL: string;
  private _user: User;

  set user(user: User){
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(user));
    this._user = user;
}


get user(): User{
    let user_json = sessionStorage.getItem("usuario-autenticado");
    this._user = JSON.parse(user_json);
    return this._user;
}

// constructor() { }

/* Verificar pq o INJECT BASE_URL nao funciona */
// constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
//     baseUrl = "https://localhost:44398/"; //retirar depois       
//     this.baseURL = baseUrl;              
// }  

constructor(private http: HttpClient){
  // baseUrl = "https://localhost:44395/"; //retirar depois       
  this.baseURL = "https://localhost:44395/";             
}


public validateUser(user: User): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
        email: user.email,
        senha: user.senha
    }     
    return this.http.post<User>(this.baseURL + "api/usuario/VerificarUsuario", body, { headers });
}    

public usuario_autenticado():boolean{
    return this._user != null && this._user.email != "" && this._user.senha != "";
}

public limpar_sessao(){
    sessionStorage.setItem("usuario-autenticado", "");
    this._user = null;
}

public cadastrarUsuario(user: User): Observable<User> {
const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    email: user.email,
    senha: user.senha,
    nome: user.nome,
    tipo: user.tipo
  }
 return this.http.post<User>(this.baseURL + "api/user", body, { headers });
}

  
}
