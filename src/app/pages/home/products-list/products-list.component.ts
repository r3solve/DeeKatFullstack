import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService} from '../../../services/product.service';
import { CartService} from '../../../services/cart.service';





@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products:Product[] = [
    
  ];

  ngOnInit() {
    this.products = this.prodService.getAll();
  }
  constructor(private prodService: ProductService, private cartService:CartService ) { }


  clicked(product:any):void {
    let productList: any[] = [];
    const productListString = localStorage.getItem('productList');
    this.cartService.loadProductListFromLocalStorage();

    if (productListString) {
      productList = JSON.parse(productListString);
       }
    // Append the clicked product to the list
      productList.push(product);

      // Save the updated list back to local storage
      localStorage.setItem('productList', JSON.stringify(productList));
      
      
     }


}
