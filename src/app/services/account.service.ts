import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _headers: HttpHeaders;
  private _accessPointUrl: string = environment.gatewayAPIBase + '/api/account';

  constructor(private _http: HttpClient) {
    this._headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public accountLoginCheck() {
    return this._http.get(this._accessPointUrl + '/accountlogincheck', {headers: this._headers});
  }

  public getProfile(userId: string) {
    return this._http.get(this._accessPointUrl + '/getprofile?userId=' + userId, {headers: this._headers});
  }

  public getProfileForAuthenticatedUser() {
    return this._http.get(this._accessPointUrl + '/getprofileforauthenticateduser', {headers: this._headers})
  }

}
