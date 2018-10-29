import { Injectable } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: Subject<string> = new Subject();
  loggedIn: Subject<boolean> = new Subject();

  private _adalConfig = {
    tenant: environment.tenant,
    clientId: environment.clientId,
    redirectUri: environment.redirectUri,
    postLogoutRedirectUri: environment.postLogoutRedirectUri,
    endpoints: {
      [environment.gatewayAPILocalBase]: environment.gatewayAPIResourceId,
      [environment.gatewayAPIBase] : environment.gatewayAPIResourceId
    }
  }

  constructor(private _adal: AdalService) {
    this._adal.init(this._adalConfig);
  }

  public isLoggedIn():boolean {
    return this._adal.userInfo.authenticated;
  }

  public getName():string {
    return this._adal.userInfo.userName;
  }

  public getUniqueName():string {
    return this._adal.userInfo.profile.unique_name;
  }

  public getUserId():string {
    return this._adal.userInfo.profile.sub;
  }

  public getToken():string {
    return this._adal.userInfo.token;
  }

  public signout():void {
    this._adal.logOut();
  }
 
  public startAuthentication():any {
    this._adal.login();
  }

  public completeAuthentication():void {
    this._adal.handleWindowCallback();

    this.loggedIn.next(this._adal.userInfo.authenticated);
    this.userName.next(this._adal.userInfo.userName);
  }
}
