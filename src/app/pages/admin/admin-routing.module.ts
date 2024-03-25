import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
const routes: Routes = [
     {path:'', component: LoginComponent},
     {path:'edit', component: HomeComponent},
     {path:'login', redirectTo:'', pathMatch:'full' }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
