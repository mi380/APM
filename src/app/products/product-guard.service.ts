import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService  implements CanActivate{

  constructor(private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let id = +route.url[1].path;
    if(isNaN(id) || id<1){
      alert("Invalid Product ID");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
