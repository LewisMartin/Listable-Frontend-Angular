import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService, private _zone: NgZone) { }

  ngOnInit() {
    this._authService.completeAuthentication().subscribe((data: any) => {
      if(data) {
        this._zone.run(
          () => this._router.navigate(['/'])
        );
      }
      else {
        this._authService.signout;
      }
    }, err => {
      this._authService.signout;
    });
  }

}
