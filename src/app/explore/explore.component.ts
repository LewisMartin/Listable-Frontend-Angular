import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  private _url = environment.gatewayAPILocalBase + '/api/values';
  vals: Array<string> = [];

  constructor(private _authService: AuthService, private _httpClient: HttpClient) { }

  ngOnInit() {

    this._httpClient.get(this._url).subscribe(values => {
      this.vals = values as Array<string>;
    });
  }

}
