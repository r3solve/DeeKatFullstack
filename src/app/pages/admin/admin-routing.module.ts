import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { CanActivateGuard } from '../../guards/can-activate.guard';


const routes: Routes = [
     {path:'', component: LoginComponent},
     {path:'home', component: HomeComponent, canActivate :[CanActivateGuard]},
     {path:'login', redirectTo:'', pathMatch:'full' }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
