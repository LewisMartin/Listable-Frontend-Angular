import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';
import { CollectionItemViewComponent } from './components/collection-item-view/collection-item-view.component';
import { CollectionItemEditComponent } from './components/collection-item-edit/collection-item-edit.component';

import { AuthGuardService } from './services/auth-guard.service';

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
      path: 'collection/:id',
      component: CollectionViewComponent
    },
    {
      path: 'collectionitem/:collectionId/:itemId',
      component: CollectionItemViewComponent
    },
    {
      path: 'collectionitem/edit/:collectionId/:itemId',
      component: CollectionItemEditComponent
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
