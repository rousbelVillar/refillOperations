import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { HomeComponent } from './Views/home/home.component';
import { RegistrationComponent } from './Views/registration/registration.component';


const routes: Routes = [
  {path: 'login' , component : LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'registration',component:RegistrationComponent},
  { path: 'registration',component: RegistrationComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
