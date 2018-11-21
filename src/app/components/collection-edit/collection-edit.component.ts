import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss']
})
export class CollectionEditComponent implements OnInit {

  collectionId: string;

  constructor(private _route: ActivatedRoute) {
    _route.params.subscribe(params => {
      this.collectionId = params['id'];
    })
  }

  ngOnInit() {
  }

}
