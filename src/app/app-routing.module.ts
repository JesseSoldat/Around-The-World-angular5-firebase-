import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'map-it', loadChildren: 'app/map-it/map-it.module#MapItModule' },
  { path: 'add-story', loadChildren: 'app/add-story/add-story.module#AddStoryModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}