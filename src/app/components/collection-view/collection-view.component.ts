import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

import { CollectionView, CollectionViewItem } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit {

  collectionId: string;
  collectionView: CollectionView;
  displayedCollectionItems: Array<CollectionViewItem>;
  displaySorted : boolean = false;

  spinnerVisible: boolean = true;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['id'];
    })
  }

  ngOnInit() {
    this._collectionService.getCollection(this.collectionId).subscribe((data: CollectionView) => { 
      this.collectionView = data;
      this.displayedCollectionItems = this.collectionView.collectionViewItems.map(x => Object.assign({}, x));
      this.spinnerVisible = false;
    });
  }

  addLike(id: string) {
    // unimplemented
  }

  sortByName() {
    if(this.displaySorted) {
      this.displayedCollectionItems = this.collectionView.collectionViewItems.map(x => Object.assign({}, x));
    } else {
      this.displayedCollectionItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.displaySorted = !this.displaySorted;
  }
}
