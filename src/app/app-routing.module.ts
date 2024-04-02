import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
        redirectTo:'all',
        pathMatch:"full"
    },

    { 
      path: 'all',
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
      redirectTo:'all',
      pathMatch:"full"
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
