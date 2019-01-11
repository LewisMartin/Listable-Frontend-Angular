import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { CollectionDeleteComponent } from './components/collection-delete/collection-delete.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { CollectionItemViewComponent } from './components/collection-item-view/collection-item-view.component';
import { CollectionItemCreateComponent } from './components/collection-item-create/collection-item-create.component';
import { CollectionItemDeleteComponent } from './components/collection-item-delete/collection-item-delete.component';
import { CollectionItemEditComponent } from './components/collection-item-edit/collection-item-edit.component';

import { AdalService, AdalInterceptor } from 'adal-angular4';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CollectionService } from './services/collection.service';
import { AccountService } from './services/account.service';

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
    CollectionCreateComponent,
    CollectionEditComponent,
    CollectionDeleteComponent,
    CollectionViewComponent,
    CollectionItemViewComponent,
    CollectionItemCreateComponent,
    CollectionItemDeleteComponent,
    CollectionItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuardService, 
    AuthService, 
    AdalService, 
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true },
    CollectionService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }