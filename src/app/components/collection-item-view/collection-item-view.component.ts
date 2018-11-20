import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-item-view',
  templateUrl: './collection-item-view.component.html',
  styleUrls: ['./collection-item-view.component.scss']
})
export class CollectionItemViewComponent implements OnInit {

  itemId: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    _route.params.subscribe(params => {
      this.itemId = params['id'];
    })
  }

  ngOnInit() {
  }

}
