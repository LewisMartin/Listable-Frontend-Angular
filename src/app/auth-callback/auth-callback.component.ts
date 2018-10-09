import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router: Router, private adal: AdalService, private _zone: NgZone) { }

  ngOnInit() {
    this.adal.handleWindowCallback();

    setTimeout(() => {
      this._zone.run(
        () => this.router.navigate(['/'])
      );
    }, 200);
  }

}
