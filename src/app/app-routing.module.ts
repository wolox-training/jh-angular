import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  {
    path: 'sign-up',
    loadChildren: () => import('./screens/sign-up/sign-up.module').then(m => m.SignUpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
