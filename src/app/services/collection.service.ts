import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateCollectionModel } from '../Models/CreateCollectionModel';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _headers: HttpHeaders;
  private _accessPointUrl: string = environment.gatewayAPILocalBase + '/api/collection';

  constructor(private _http: HttpClient) {
    this._headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getCollectionsForUser(userId: string) {
    return this._http.get(this._accessPointUrl + '/getcollections?userId=' + userId, {headers: this._headers});
  }

  public getCollectionsForAuthenticatedUser() {
    return this._http.get(this._accessPointUrl + '/getcollectionsforauthenticateduser', {headers: this._headers});
  }

  public createCollection(newCollection: CreateCollectionModel)
  {
    var body = {
      Name: newCollection.Name,
      ImageEnabled: newCollection.ImageEnabled,
      GridDisplay: newCollection.GridDisplay
    }

    return this._http.post<CreateCollectionModel>(this._accessPointUrl + '/createcollection', body, {
      headers: this._headers
    })
  }
}