import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { CollectionQueryResults, CollectionQueryResult } from 'src/app/Models/CollectionQueryResults';
import { CollectionQueryFormModel } from 'src/app/Models/CollectionQueryFormModel';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  collectionQueryResults: CollectionQueryResults;
  displaySorted : boolean = false;
  searchTerm: string = '';
  spinnerVisible = false;

  constructor(private _collectionService: CollectionService) 
  {
    this.collectionQueryResults = new CollectionQueryResults();
    this.collectionQueryResults.count = 0;
    this.collectionQueryResults.queryResults = new Array<CollectionQueryResult>();
  }

  ngOnInit() { }

  search() 
  {
    this.collectionQueryResults.count = 0;
    this.collectionQueryResults.queryResults = new Array<CollectionQueryResult>();
    this.spinnerVisible = true;

    var queryModel = new CollectionQueryFormModel();
    queryModel.SearchTerm = this.searchTerm;

    this._collectionService.queryCollections(queryModel).subscribe((data: any) => {
      this.collectionQueryResults = data;
      this.setInitialOrder();
      this.spinnerVisible = false;
    }, (err) => {

    });
  }

  clearSearch() 
  {
    this.collectionQueryResults.count = 0;
    this.collectionQueryResults.queryResults = new Array<CollectionQueryResult>();
    this.searchTerm = '';
    this.sort();
  }

  setInitialOrder() {
    var i = 0;

    for(let item of this.collectionQueryResults.queryResults) {
      item.pos = i;
      i++;
    }
  }

  sortToggle() {
    this.displaySorted = !this.displaySorted;
    this.sort();
  }

  sort() {
    if(this.displaySorted) {
      this.collectionQueryResults.queryResults.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.collectionQueryResults.queryResults.sort((a, b) => a.pos - b.pos);
    }
  }

}
