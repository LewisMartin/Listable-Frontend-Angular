import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { CollectionItemView } from 'src/app/Models/Collection';
import { DeleteCollectionItemFormModel } from 'src/app/Models/DeleteCollectionItemFormModel';

@Component({
  selector: 'app-collection-item-delete',
  templateUrl: './collection-item-delete.component.html',
  styleUrls: ['./collection-item-delete.component.scss']
})
export class CollectionItemDeleteComponent implements OnInit {

  collectionId: string;
  itemId: string;
  collectionItemView: CollectionItemView;

  spinnerVisible: boolean = true;
  responseErrorVisible: boolean = false;
  disableSubmit: boolean = false;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) 
  {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.itemId = params['itemId'];
    });
  }

  ngOnInit() 
  {
    this._collectionService.getCollectionItem(this.collectionId, this.itemId).subscribe((data: CollectionItemView) => { 
      this.collectionItemView = data;
      this.spinnerVisible = false;
    });
  }

  confirmDelete()
  {
    this.disableSubmit = true;

    var deletedCollectionItem = new DeleteCollectionItemFormModel();
    deletedCollectionItem.CollectionId = this.collectionId;
    deletedCollectionItem.CollectionItemId = this.itemId;

    this._collectionService.deleteCollectionItem(deletedCollectionItem).subscribe((data: any) => {
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
