import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  userId: string;
  collections: Array<any>;

  constructor(private _route: ActivatedRoute, private _collectionService: CollectionService) 
  {
    this.userId = this._route.snapshot.params.userId;
    this._collectionService.getCollections(this.userId).subscribe((data: any) => this.collections = data);
  }

  ngOnInit() 
  {
    
  }

}
