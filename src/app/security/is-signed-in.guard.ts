import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {
  constructor (private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const ch = JSON.parse(localStorage.getItem('isloggedIn') || '{}');
      if(ch===true) {
        this.router.navigate(['/']);
        console.log(ch);
        return false;
      }

      return true;
  }
  
}
