import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShieldGuard implements CanActivate {

  constructor (
    private router: Router
  ) {}

  canActivate() {
      if (localStorage.getItem('token') == null){
        this.router.navigate(['login']);
        return false;
      }
    return true;
  }
  
}
