import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService) { }

  canActivate(): boolean {
    
    if(this._authService.isAuthorized()){
      return true;
    }
    else {
      this._authService.startAuthentication();
      return false;
    }
  }
}
