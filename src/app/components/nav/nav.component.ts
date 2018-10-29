import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;

  loggedIn: boolean = false;
  userName: string = "";
  userId: string = "";

  constructor(private _authService: AuthService) {
    this.isCollapsed = true;

    this._authService.userName.subscribe((val) => {
      this.userName = val;
    });

    this._authService.loggedIn.subscribe((val) => {
      this.loggedIn = val;
    });
   }

  ngOnInit() {
    if(this._authService.isLoggedIn()){
      this.loggedIn = true;
      this.userName = this._authService.getName();
      this.userId = this._authService.getUserId();
    }
  }

  toggleNav(){
    this.isCollapsed = !this.isCollapsed;
  }

  signIn(){
    this._authService.startAuthentication();
  }
}
