import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { NgForm } from '@angular/forms';
import { CreateCollectionItemFormModel } from 'src/app/Models/CreateCollectionItemFormModel';
import { CollectionSettings } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collection-item-create',
  templateUrl: './collection-item-create.component.html',
  styleUrls: ['./collection-item-create.component.scss']
})
export class CollectionItemCreateComponent implements OnInit {

  collectionId: string;
  collectionSettings: CollectionSettings;

  responseErrorVisible: boolean = false;
  disableSubmit: boolean = false;
  spinnerVisible: boolean = true;

  @ViewChild('itemImg') fileInput;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
    });
  }

  ngOnInit() {
    this._collectionService.getCollectionSettings(this.collectionId).subscribe((data: CollectionSettings) => {
      this.collectionSettings = data;
      this.spinnerVisible = false;
    });
  }

  cancel() {
    this._router.navigate(['/collection/', this.collectionId]);
  }

  submit(form: NgForm) {
    this.disableSubmit = true;
    this.hideResponseError();

    var newCollectionItem = new CreateCollectionItemFormModel();
    newCollectionItem.CollectionId = form.value.collId;
    newCollectionItem.Name = form.value.itemName;
    newCollectionItem.Description = form.value.itemDesc;
    newCollectionItem.ImageFile = this.fileInput.nativeElement;

    this._collectionService.createCollectionItem(newCollectionItem).subscribe((data: any) => {
      this._router.navigate(['/collection/', this.collectionId]);
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
