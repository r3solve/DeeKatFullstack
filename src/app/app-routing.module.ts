import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
        redirectTo:'p',
        pathMatch:"full"
    },

    { 
      path: 'p',
      loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),

    },
 
    {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then((m) => m.CartModule),
    },

    {
      path: 'admin',
      loadChildren:() => import('./pages/admin/admin.module').then((m)=>m.AdminModule),
    },

    {
      path:'**',
      redirectTo:'p',
      pathMatch:"full"
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
