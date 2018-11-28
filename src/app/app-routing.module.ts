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

import { AuthGuardService } from './services/auth-guard.service';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { CollectionItemDeleteComponent } from './components/collection-item-delete/collection-item-delete.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'explore',
      component: ExploreComponent,
    },
    {
      path: 'profile/:userId',
      component: ProfileComponent,
    },
    {
      path: 'collections',
      component: CollectionsComponent,
    },
    {
      path: 'collection/edit/:id',
      component: CollectionEditComponent
    },
    {
      path: 'collection/:id',
      component: CollectionViewComponent
    },
    {
      path: 'collectionitem/create/:collectionId',
      component: CollectionItemCreateComponent
    },
    {
      path: 'collectionitem/edit/:collectionId/:itemId',
      component: CollectionItemEditComponent
    },
    {
      path: 'collectionitem/delete/:collectionId/:itemId',
      component: CollectionItemDeleteComponent
    },
    {
      path: 'collectionitem/:collectionId/:itemId',
      component: CollectionItemViewComponent
    }
  ]},
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
