import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';
import { CreateCollectionFormModel } from 'src/app/Models/CreateCollectionFormModel';

import { CollectionsListItem } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  userId: string;
  collectionList: Array<CollectionsListItem>;
  newCollection: CreateCollectionFormModel;

  collectionListVisible: boolean = true;
  createFormVisible: boolean = false;
  deleteFormVisible: boolean = false;
  responseErrorVisible: boolean = false;
  spinnerVisible: boolean = true;

  disableSubmit: boolean = false;

  constructor(private _route: ActivatedRoute, private _collectionService: CollectionService) 
  { }

  ngOnInit() {
    this._collectionService.getCollectionsForAuthenticatedUser().subscribe((data: Array<CollectionsListItem>) => { 
      this.collectionList = data;
      this.spinnerVisible = false;
    });
  }

  showCreateForm() {
    this.hideDeleteForm();
    this.hideListDisplay();
    this.disableSubmit = false;
    this.createFormVisible = true;
  }

  showDeleteForm() {
    this.hideCreateForm();
    this.hideListDisplay();
    this.disableSubmit = false;
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
    this.disableSubmit = true;
    this.hideResponseError();

    this.newCollection = new CreateCollectionFormModel();
    this.newCollection.Name = createForm.value.collectionName;
    this.newCollection.ImageEnabled = createForm.value.imageEnabled;
    this.newCollection.GridDisplay = createForm.value.gridDisplay;

    this._collectionService.createCollection(this.newCollection).subscribe((data: any) => {
      this.collectionList.push(data);
      this.hideCreateForm();
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }

  submitDelete(deleteForm: NgForm) {
    this.disableSubmit = true;
    this.hideResponseError();

    this._collectionService.deleteCollection(deleteForm.value.selectedCollection).subscribe(result => {
      this.collectionList = this.collectionList.filter(coll => coll.id !== deleteForm.value.selectedCollection);
      this.hideDeleteForm();
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }
}
