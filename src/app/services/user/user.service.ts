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
    if ( user_json != null){
        if (user_json != ""){
          this._user = JSON.parse(user_json).ObjetoResposta;
          return this._user;
        }else{
          return new User();
        }
      }else{
        return null;
      }
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
    return this.http.post<User>(this.baseURL + "api/user/VerificarUsuario", body, { headers });
}    

public usuario_autenticado():boolean{    
    return this.user != null && this.user.email != "" && this.user.senha != "";
}

public limpar_sessao(){
  sessionStorage.clear();
    this._user = null;
}

public cadastrarUsuario(user: User): Observable<User> {
const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    email: user.email,
    senha: user.senha,
    nome: user.nome,
    tipoUsuario: user.tipoUsuario
  }
    return this.http.post<User>(this.baseURL + "api/user", body, { headers });
}

public alterarUsuario(user: User): Observable<User> {
  const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      id: user.id,
      email: user.email,
      senha: user.senha,
      nome: user.nome,
      tipoUsuario: user.tipoUsuario
    }
   return this.http.put<User>(this.baseURL + "api/user", body, { headers });
  }
  
}
