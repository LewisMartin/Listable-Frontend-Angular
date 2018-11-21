import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { CollectionItemView } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collection-item-view',
  templateUrl: './collection-item-view.component.html',
  styleUrls: ['./collection-item-view.component.scss']
})
export class CollectionItemViewComponent implements OnInit {

  collectionId: string;
  itemId: string;
  collectionItemView: CollectionItemView;

  spinnerVisible: boolean = true;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.itemId = params['itemId'];
    });
  }

  ngOnInit() {
    this._collectionService.getCollectionItem(this.collectionId, this.itemId).subscribe((data: CollectionItemView) => { 
      this.collectionItemView = data;
      this.spinnerVisible = false;
    });
  }

}
