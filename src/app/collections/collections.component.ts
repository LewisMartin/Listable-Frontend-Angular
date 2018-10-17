import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  userId: string;

  constructor(private _route: ActivatedRoute) 
  {
    this.userId = this._route.snapshot.params.userId;
  }

  ngOnInit() {
  }

}
