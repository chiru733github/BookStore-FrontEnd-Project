import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GuardService } from '../Services/guard/guard.service';



@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private authguardservice:GuardService,private router:Router){}
  canActivate(): boolean{
    if(!this.authguardservice.gettoken()){
      this.router.navigateByUrl("/loginandSignIn");
    }
    return this.authguardservice.gettoken();
  }
}