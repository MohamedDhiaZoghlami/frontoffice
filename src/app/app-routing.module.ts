import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprofilComponent } from './pages/myprofil/myprofil.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ControllerGuard } from './security/controller.guard';
import { IsSignedInGuard } from './security/is-signed-in.guard';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '',component:LandingpageComponent},
  {path:'dashboard',loadChildren:
  ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)  
  ,canActivate:[ControllerGuard]},
  { path: 'login', component:LoginComponent,canActivate:[IsSignedInGuard]},
  { path: 'signup', component:SignupComponent,canActivate:[IsSignedInGuard]},
  {path:'myprofil',component:MyprofilComponent},
  {path:'**',component:ForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
