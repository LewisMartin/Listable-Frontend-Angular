import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionSettings } from 'src/app/Models/Collection';
import { CollectionService } from 'src/app/services/collection.service';
import { NgForm } from '@angular/forms';
import { EditCollectionFormModel } from 'src/app/Models/EditCollectionFormModel';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss']
})
export class CollectionEditComponent implements OnInit {

  collectionId: string;
  collectionSettings: CollectionSettings;
  editedCollection: EditCollectionFormModel;

  spinnerVisible: boolean = true;
  disableSubmit: boolean = false;
  responseErrorVisible: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['id'];
    })
  }

  ngOnInit() {
    this._collectionService.getCollectionSettings(this.collectionId).subscribe((data: CollectionSettings) => {
      this.collectionSettings = data;
      this.spinnerVisible = false;
    });
  }

  cancel() {
    this._router.navigate(['/home/collection/', this.collectionId]);
  }

  submit(form: NgForm) {
    this.disableSubmit = true;
    this.hideResponseError();

    this.editedCollection = new EditCollectionFormModel();
    this.editedCollection.Id = form.value.collectionId;
    this.editedCollection.PrivateMode = form.value.privateMode;
    this.editedCollection.Name = form.value.collectionName;
    this.editedCollection.GridDisplay = form.value.gridDisplay;

    this._collectionService.editCollection(this.editedCollection).subscribe((data: any) => {
      this._router.navigate(['/home/collection/', this.collectionId]);
    }, err => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }

  showResponseError() {
    this.responseErrorVisible = true;
  }

  hideResponseError() {
    this.responseErrorVisible = false;
  }

}
