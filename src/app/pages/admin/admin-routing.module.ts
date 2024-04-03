import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from '../../guards/can-activate.guard';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
     {path:'', component: LoginComponent},
     {path:'base', component: BaseComponent},
     {path:'login', redirectTo:'', pathMatch:'full' },
     {path:'**', redirectTo:'', pathMatch: 'full'}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }