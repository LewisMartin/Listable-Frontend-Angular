import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-item-delete',
  templateUrl: './collection-item-delete.component.html',
  styleUrls: ['./collection-item-delete.component.scss']
})
export class CollectionItemDeleteComponent implements OnInit {

  collectionId: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) 
  {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
    });
  }

  ngOnInit() 
  {
    
  }

}
