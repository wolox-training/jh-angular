import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'unauth',
    loadChildren: () => import('./screens/unauth/unauth.module').then(m => m.UnAuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
