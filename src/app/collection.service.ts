import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _headers: HttpHeaders;
  private _accessPointUrl: string = environment.gatewayAPILocalBase + '/api/collection';

  constructor(private _http: HttpClient) {
    this._headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getCollections(userId: string) {
    return this._http.get(this._accessPointUrl + '/getcollections?userId=' + userId, {headers: this._headers});
  }
}
