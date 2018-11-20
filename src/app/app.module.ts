import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';

import { AdalService, AdalInterceptor } from 'adal-angular4';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CollectionService } from './services/collection.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CollectionsComponent,
    ExploreComponent,
    ProfileComponent,
    AuthCallbackComponent,
    LoadingSpinnerComponent,
    CollectionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
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