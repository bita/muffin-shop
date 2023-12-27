import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { loginGuard } from '../guard/login-guard.guard';

const appRoutes: Routes = [
  { path: '', component: AuthComponent, canActivate: [loginGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AuthRouting {}
