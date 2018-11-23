import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateCollectionFormModel } from '../Models/CreateCollectionFormModel';
import { EditCollectionFormModel } from '../Models/EditCollectionFormModel';
import { CreateCollectionItemFormModel } from '../Models/CreateCollectionItemFormModel';

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

  public getCollection(id: string) {
    return this._http.get(this._accessPointUrl + '/getcollection?id=' + id, {headers: this._headers});
  }

  public getCollectionSettings(id: string) {
    return this._http.get(this._accessPointUrl + '/getcollectionsettings?id=' + id, {headers: this._headers})
  }

  public createCollection(newCollection: CreateCollectionFormModel) {
    var body = {
      Name: newCollection.Name,
      ImageEnabled: newCollection.ImageEnabled,
      GridDisplay: newCollection.GridDisplay
    }

    return this._http.post<CreateCollectionFormModel>(this._accessPointUrl + '/createcollection', body, {
      headers: this._headers
    });
  }

  public editCollection(editedCollection: EditCollectionFormModel) {
    var body = {
      Id: editedCollection.Id,
      Name: editedCollection.Name,
      GridDisplay: editedCollection.GridDisplay
    }

    return this._http.post<EditCollectionFormModel>(this._accessPointUrl + '/editcollection', body, {
      headers: this._headers
    });
  }

  public deleteCollection(collectionId: string) {
    var body = {
      SelectedCollectionId: collectionId
    }

    return this._http.post(this._accessPointUrl + '/deletecollection', body, {
      headers: this._headers
    });
  }

  public getCollectionItem(collectionId: string, itemId: string) {
    return this._http.get(this._accessPointUrl + '/getcollectionitem?collectionId=' + collectionId + '&itemId=' + itemId, {headers: this._headers});
  }

  public createCollectionItem(newCollectionItem: CreateCollectionItemFormModel) {
    var formData = new FormData();
    formData.append("CollectionId", newCollectionItem.CollectionId);
    formData.append("Name", newCollectionItem.Name);
    formData.append("Description", newCollectionItem.Description);

    if (newCollectionItem.ImageFile.files && newCollectionItem.ImageFile.files[0]) {
      formData.append("ImageFile", newCollectionItem.ImageFile.files[0]);
    }

    return this._http.post(this._accessPointUrl + '/createcollectionitem', formData);
  }
}