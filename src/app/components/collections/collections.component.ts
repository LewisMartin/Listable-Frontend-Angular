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
}
