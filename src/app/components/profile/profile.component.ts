import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId: string;

  constructor(private _route: ActivatedRoute) 
  {
    this.userId = this._route.snapshot.params.userId;
  }

  ngOnInit() {
  }

}
