import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-item-create',
  templateUrl: './collection-item-create.component.html',
  styleUrls: ['./collection-item-create.component.scss']
})
export class CollectionItemCreateComponent implements OnInit {

  collectionId: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _collectionService: CollectionService) {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
    });
  }

  ngOnInit() {
  }

}
