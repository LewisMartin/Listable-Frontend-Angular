import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ProfileView } from 'src/app/Models/ProfileView';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId: string;
  spinnerVisible: boolean = true;
  profileView: ProfileView;

  constructor(private _route: ActivatedRoute, private _accountService: AccountService) 
  {
    _route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit() 
  {
    if(!this.userId) {
      this._accountService.getProfileForAuthenticatedUser().subscribe((data: ProfileView) => {
        this.profileView = data;
        this.spinnerVisible = false;
      });
    } else {      
      this._accountService.getProfile(this.userId).subscribe((data: ProfileView) => {
        this.profileView = data;
        this.spinnerVisible = false;
      });
    }
  }
}
