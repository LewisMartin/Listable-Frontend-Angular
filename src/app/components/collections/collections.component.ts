import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';
import { CreateCollectionModel } from 'src/app/Models/CreateCollectionModel';

import { AuthService } from 'src/app/services/auth.service';
import { CollectionListItem } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  userId: string;
  collections: Array<CollectionListItem>;
  newCollection: CreateCollectionModel;

  collectionListVisible: boolean;
  createFormVisible: boolean;
  deleteFormVisible: boolean;
  responseErrorVisible: boolean;

  constructor(private _route: ActivatedRoute, private _collectionService: CollectionService, private _authService: AuthService) 
  {
    this._collectionService.getCollectionsForAuthenticatedUser().subscribe((data: Array<CollectionListItem>) => this.collections = data);
  }

  ngOnInit() {
    this.collectionListVisible = true;
    this.createFormVisible = false;
    this.deleteFormVisible = false;
    this.responseErrorVisible = false;
  }

  showCreateForm() {
    console.log(this.collections);
    this.hideDeleteForm();
    this.hideListDisplay();
    this.createFormVisible = true;
  }

  showDeleteForm() {
    this.hideCreateForm();
    this.hideListDisplay();
    this.deleteFormVisible = true;
  }

  hideCreateForm() {
    this.createFormVisible = false;
    this.hideResponseError();
    this.showListDisplay();
  }

  hideDeleteForm() {
    this.deleteFormVisible = false;
    this.hideResponseError();
    this.showListDisplay();
  }

  showListDisplay() {
    this.collectionListVisible = true;
  }

  hideListDisplay() {
    this.collectionListVisible = false;
  }

  showResponseError() {
    this.responseErrorVisible = true;
  }

  hideResponseError() {
    this.responseErrorVisible = false;
  }

  submitCreate(createForm: NgForm) {
    this.hideResponseError();
    this.newCollection = new CreateCollectionModel();
    this.newCollection.Name = createForm.value.collectionName;
    this.newCollection.ImageEnabled = createForm.value.imageEnabled;
    this.newCollection.GridDisplay = createForm.value.gridDisplay;

    this._collectionService.createCollection(this.newCollection).subscribe((data: any) => {
      this.collections.push(data);
      this.hideCreateForm();
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
    })
  }

  submitDelete(deleteForm: NgForm) {
    this.hideResponseError();

    this._collectionService.deleteCollection(deleteForm.value.selectedCollection).subscribe(result => {
      this.collections = this.collections.filter(coll => coll.id !== deleteForm.value.selectedCollection);
      this.hideDeleteForm();
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
    })
  }
}
