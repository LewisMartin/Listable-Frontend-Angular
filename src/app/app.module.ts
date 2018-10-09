import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AdalService } from 'adal-angular4';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CollectionsComponent,
    ExploreComponent,
    ProfileComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }