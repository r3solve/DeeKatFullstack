import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductsListComponent},
      { path: ":id", component: ProductDetailComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
