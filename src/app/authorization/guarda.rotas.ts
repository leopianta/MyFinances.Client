import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";


@Injectable({
    providedIn:'root'
})

export class GuardaRotas implements CanActivate {   

    constructor(private router: Router, private userService: UserService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {        
        //Se usuário autenticado, retorna verdadeiro
 
        if (this.userService.usuario_autenticado()) {           
            return true;
        }else{           
            this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
