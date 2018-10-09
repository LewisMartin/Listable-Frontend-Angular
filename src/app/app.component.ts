import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Listable Angular Client';

  private adalConfig = {
    tenant: '[TENANT_GUID]',
    clientId: '[CLIENTID_GUID]',
    redirectUri: '[LOGIN_REDIRECT_URL]',
    postLogoutRedirectUri: '[POST_LOGOUT_REDIRECT_URL]',
    endpoints: {
      '[HOME_URL_WEB_API]': '[CLIENTID_WEB_API_GUID]'
    }
  }

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfig);
  }

  signOut(): void {
    this.adal.logOut();
  }
}
