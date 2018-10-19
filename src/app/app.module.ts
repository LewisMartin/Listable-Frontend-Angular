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

import { AdalService, AdalInterceptor } from 'adal-angular4';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CollectionService } from './collection.service';

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
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService, 
    AuthService, 
    AdalService, 
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true },
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }