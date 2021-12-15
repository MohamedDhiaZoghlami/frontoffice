import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../sharedservices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerGuard implements CanActivate {
  usr!:User;
  constructor (private authService: AuthService,
    private router : Router) {} 
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot):  boolean  {
  const ch = JSON.parse(localStorage.getItem('user') || '{}');
  this.usr=ch;

if (this.usr.isAdmin)

return true;
else
{
this.router.navigate(['/']);
return false;
}
}

  
}
