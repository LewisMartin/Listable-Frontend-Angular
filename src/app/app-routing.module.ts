import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionsComponent } from './collections/collections.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

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
      path: 'collections/:userId',
      component: CollectionsComponent,
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
