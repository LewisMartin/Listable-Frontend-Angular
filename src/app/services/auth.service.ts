import { Injectable } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: Subject<string> = new Subject();
  loggedIn: Subject<boolean> = new Subject();
  authorized: boolean = false;

  private _adalConfig = {
    tenant: environment.tenant,
    clientId: environment.clientId,
    redirectUri: environment.redirectUri,
    postLogoutRedirectUri: environment.postLogoutRedirectUri,
    endpoints: {
      [environment.gatewayAPIBase]: environment.gatewayAPIResourceId
    }
  }

  constructor(private _adal: AdalService, private _accountService: AccountService) {
    this._adal.init(this._adalConfig);
  }

  public isAuthenticated():boolean {
    return this._adal.userInfo.authenticated;
  }

  public isAuthorized():boolean {
    return this.authorized;
  }

  public getName():string {
    return this._adal.userInfo.userName;
  }

  public getUniqueName():string {
    return this._adal.userInfo.profile.unique_name;
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

  public completeAuthentication(): Observable<boolean> {
    this._adal.handleWindowCallback();

    var subject = new Subject<boolean>();

    if(window === window.parent) {
      this._accountService.accountLoginCheck().subscribe((data: any) => {       
        this.authorized = true;
        this.loggedIn.next(this._adal.userInfo.authenticated);
        this.userName.next(this._adal.userInfo.userName);
  
        subject.next(true);
      }, err => {
        subject.next(false);
      });
  
      return subject.asObservable();
    } 
    else 
    {
      subject.next(false);
      return subject.asObservable();
    }
  }
}
