import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

import { AuthGuardService } from './services/auth-guard.service';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';

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
