import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'contrasena',component:ContrasenaComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent}
];
