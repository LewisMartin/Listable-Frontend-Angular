import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Listable Angular Client';

  private adalConfig = {
    tenant: environment.tenant,
    clientId: environment.clientId,
    redirectUri: environment.redirectUri,
    postLogoutRedirectUri: environment.postLogoutRedirectUri
  }

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfig);
  }

  signOut(): void {
    this.adal.logOut();
  }
}
