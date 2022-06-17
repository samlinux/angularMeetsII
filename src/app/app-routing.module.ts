import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'c', 
    component: DashboardComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: '', 
    redirectTo:'login', 
    pathMatch:'full'
  },
  {
    path: '**', 
    component: DashboardComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
