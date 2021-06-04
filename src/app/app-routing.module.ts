import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/guards/auth.guard';
import { UnAuthGuard } from './helpers/guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'unauth',
    loadChildren: () => import('./screens/unauth/unauth.module').then(m => m.UnAuthModule),
    canActivate: [UnAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
