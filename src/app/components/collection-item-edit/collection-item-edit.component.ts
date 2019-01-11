import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionItemView, CollectionSettings } from 'src/app/Models/Collection';
import { CollectionService } from 'src/app/services/collection.service';
import { NgForm } from '@angular/forms';
import { EditCollectionItemFormModel } from 'src/app/Models/EditCollectionItemFormModel';

@Component({
  selector: 'app-collection-item-edit',
  templateUrl: './collection-item-edit.component.html',
  styleUrls: ['./collection-item-edit.component.scss']
})
export class CollectionItemEditComponent implements OnInit {

  collectionId: string;
  collectionItemId: string;
  collectionItem: CollectionItemView;
  collectionSettings: CollectionSettings;

  responseErrorVisible: boolean = false;
  spinnerVisible: boolean = true;
  disableSubmit: boolean = false;

  @ViewChild('itemImg') fileInput;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.collectionItemId = params['itemId'];
    });
  }

  ngOnInit() {
    this._collectionService.getCollectionSettings(this.collectionId).subscribe((data: CollectionSettings) => {
      this.collectionSettings = data;

      this._collectionService.getCollectionItem(this.collectionId, this.collectionItemId).subscribe((data: CollectionItemView) => { 
        this.collectionItem = data;
        this.spinnerVisible = false;
      });
    });

  }

  cancel() {
    this._router.navigate(['/home/collectionitem/', this.collectionId, this.collectionItemId]);
  }

  submit(form: NgForm) {
    this.disableSubmit = true;
    this.hideResponseError();

    var editedCollectionItem = new EditCollectionItemFormModel();
    editedCollectionItem.CollectionId = this.collectionId;
    editedCollectionItem.Id = this.collectionItemId;
    editedCollectionItem.Name = form.value.itemName;
    editedCollectionItem.Description = form.value.itemDesc;
    editedCollectionItem.ImageFile = this.fileInput.nativeElement;

    this._collectionService.editCollectionItem(editedCollectionItem).subscribe((data: any) => {
      this._router.navigate(['/home/collectionitem/', this.collectionId, this.collectionItemId]);
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
