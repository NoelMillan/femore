import { NgModule } from '@angular/core';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToList = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module')
                            .then( m => m.LandingPageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectLoggedInToList }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module')
                            .then( m => m.RegisterPageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectLoggedInToList }
  },
  {
    path: 'recover',
    loadChildren: () => import('./pages/recover/recover.module')
                            .then( m => m.RecoverPageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectLoggedInToList }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
                            .then( m => m.HomePageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/profile/profile.module')
                            .then( m => m.ProfilePageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'profile-reset/:id',
    loadChildren: () => import('./pages/profile-reset/profile-reset.module')
                            .then( m => m.ProfileResetPageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'interactive-maps/:centerName',
    loadChildren: () => import('./pages/interactive-maps/interactive-maps.module')
                            .then( m => m.InteractiveMapsPageModule),
                            canActivate: [AuthGuard],
                            data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
