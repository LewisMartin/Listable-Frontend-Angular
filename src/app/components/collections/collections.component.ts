import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

import { CollectionsListItem } from 'src/app/Models/Collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collectionList: Array<CollectionsListItem>;

  collectionListVisible: boolean = true;
  spinnerVisible: boolean = true;

  constructor(private _route: ActivatedRoute, private _collectionService: CollectionService) 
  { }

  ngOnInit() {
    this._collectionService.getCollectionsForAuthenticatedUser().subscribe((data: Array<CollectionsListItem>) => { 
      this.collectionList = data;
      this.spinnerVisible = false;
    });
  }
}
