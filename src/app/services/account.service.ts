import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EditProfileFormModel } from '../Models/EditProfileFormModel';

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

  public checkDisplayName(desiredName: string) {
    return this._http.get(this._accessPointUrl + '/checkdisplayname?displayName=' + desiredName, {headers: this._headers});
  }

  public editProfile(editedProfile: EditProfileFormModel) {
    return this._http.post(this._accessPointUrl + '/editprofile', editedProfile, {headers: this._headers});
  }

}
