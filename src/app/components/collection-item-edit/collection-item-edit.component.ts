import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-item-edit',
  templateUrl: './collection-item-edit.component.html',
  styleUrls: ['./collection-item-edit.component.scss']
})
export class CollectionItemEditComponent implements OnInit {

  collectionId: string;
  itemId: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    _route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.itemId = params['itemId'];
    });
  }

  ngOnInit() {
  }

}
