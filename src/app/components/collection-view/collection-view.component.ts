import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  searchTerm: string = '';

  constructor(private _route: ActivatedRoute, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['id'];
    })
  }

  ngOnInit() {
    this._collectionService.getCollection(this.collectionId).subscribe((data: CollectionView) => { 
      this.collectionView = data;
      this.setInitialOrder();
      this.displayedCollectionItems = this.collectionView.collectionViewItems.map(x => Object.assign({}, x));
      this.spinnerVisible = false;
    });
  }

  addLike(id: string) {
    // unimplemented
  }

  sortToggle() {
    this.displaySorted = !this.displaySorted;
    this.sort();
  }

  sort() {
    if(this.displaySorted) {
      this.displayedCollectionItems.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.displayedCollectionItems.sort((a, b) => a.pos - b.pos);
    }
  }

  filter() {
    this.displayedCollectionItems = this.collectionView.collectionViewItems.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.sort();
  }

  clearFilter() {
    this.displayedCollectionItems = this.collectionView.collectionViewItems.map(x => Object.assign({}, x));
    this.searchTerm = '';
    this.sort();
  }

  setInitialOrder() {
    var i = 0;

    for(let item of this.collectionView.collectionViewItems) {
      item.pos = i;
      i++;
    }
  }

}
