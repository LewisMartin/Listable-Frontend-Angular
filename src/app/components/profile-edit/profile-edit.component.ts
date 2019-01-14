import { Component, OnInit } from '@angular/core';
import { ProfileView } from 'src/app/Models/ProfileView';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { EditProfileFormModel } from 'src/app/Models/EditProfileFormModel';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  profileView: ProfileView;

  rForm: FormGroup;
  post: any;
  displayName: string = '';
  firstName: string = '';
  lastName: string = '';

  spinnerVisible: boolean = true;
  disableSubmit: boolean = false;
  responseErrorVisible: boolean = false;
  displayNameValidated: boolean = true;

  debouncer: any;

  constructor(private _router: Router, private _accountService: AccountService, private _fb: FormBuilder) { }

  ngOnInit() {
    this._accountService.getProfileForAuthenticatedUser().subscribe((data: ProfileView) => {
      this.profileView = data;

      this.displayName = this.profileView.displayName;
      this.firstName = this.profileView.firstName;
      this.lastName = this.profileView.lastName;

      this.rForm = this._fb.group({
        'displayName': [this.displayName, Validators.compose([Validators.required, Validators.maxLength(20)]), this.validateDisplayName.bind(this)],
        'firstName': [this.firstName, Validators.maxLength(30)],
        'lastName': [this.lastName, Validators.maxLength(40)],
      });

      this.spinnerVisible = false;
    });
  }

  cancel() {
    this._router.navigate(['/home/profile/', this.profileView.id]);
  }

  submit(post) {
    this.disableSubmit = true;
    this.hideResponseError();

    var editedProfile = new EditProfileFormModel();
    editedProfile.Id = this.profileView.id;
    editedProfile.DisplayName = post.displayName;
    editedProfile.FirstName = post.firstName;
    editedProfile.LastName = post.lastName;

    this._accountService.editProfile(editedProfile).subscribe((data: any) => {
      this._router.navigate(['/home/profile']);
    }, (err) => {
      console.log("Error occured: " + err.message);
      this.showResponseError();
      this.disableSubmit = false;
    });
  }

  validateDisplayName(control: FormControl): Promise<any> {
    this.displayNameValidated = false;
    clearTimeout(this.debouncer);

    return new Promise(resolve => {

        if(control.value == this.profileView.displayName) {
          this.displayNameValidated = true;
          resolve(null);
        } else {
          this.debouncer = setTimeout(() => {
            this._accountService.checkDisplayName(control.value).subscribe((res) => {
              this.displayNameValidated = true;  
              resolve(null);
            }, (err) => {
                resolve({ 'displayNameTaken': true });
            });
          }, 1000);
        }
    });
  }

  showResponseError() {
    this.responseErrorVisible = true;
  }

  hideResponseError() {
    this.responseErrorVisible = false;
  }
}
