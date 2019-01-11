import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { CollectionItemViewComponent } from './components/collection-item-view/collection-item-view.component';
import { CollectionItemCreateComponent } from './components/collection-item-create/collection-item-create.component';
import { CollectionItemEditComponent } from './components/collection-item-edit/collection-item-edit.component';
import { CollectionItemDeleteComponent } from './components/collection-item-delete/collection-item-delete.component';
import { CollectionCreateComponent } from './components/collection-create/collection-create.component';
import { CollectionDeleteComponent } from './components/collection-delete/collection-delete.component';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
    { path: '', redirectTo: 'collections', pathMatch: 'full' },
    { path: 'explore', component: ExploreComponent },
    { path: 'profile/:userId', component: ProfileComponent },
    { path: 'collections', component: CollectionsComponent },
    { path: 'collection/create', component: CollectionCreateComponent },
    { path: 'collection/delete', component: CollectionDeleteComponent },
    { path: 'collection/edit/:id', component: CollectionEditComponent },
    { path: 'collection/:id', component: CollectionViewComponent },
    { path: 'collectionitem/create/:collectionId', component: CollectionItemCreateComponent },
    { path: 'collectionitem/edit/:collectionId/:itemId', component: CollectionItemEditComponent },
    { path: 'collectionitem/delete/:collectionId/:itemId', component: CollectionItemDeleteComponent },
    { path: 'collectionitem/:collectionId/:itemId', component: CollectionItemViewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
