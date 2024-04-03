import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]> = new Observable<Product[]>(undefined);
  specialSelection:boolean = false;


  constructor(private prodService: ProductService, private cartService: CartService, private data: DataService) { }

  ngOnInit() {
    this.products = this.data.getItems();
    this.cartService.loadProductListFromLocalStorage();

  }

  clicked(product: any): void {
    let productList: any[] = [];
    const productListString = localStorage.getItem('productList');
    this.cartService.loadProductListFromLocalStorage();

    if (productListString) {
        productList = JSON.parse(productListString);
    }

    // Check if the product is already in the cart
    const productIndex = productList.findIndex((p) => p.uuid === product.uuid);

    if (productIndex === -1) {
        // Product not in cart, so add it
        productList.push(product);

        // Save the updated list back to local storage
        localStorage.setItem('productList', JSON.stringify(productList));
    } else {
        // Product already in cart
        alert("Product Already in cart")
    }
}

}














// import { Component, OnInit } from '@angular/core';
// import { Product } from '../../../interfaces/product';
// import { ProductService} from '../../../services/product.service';
// import { CartService} from '../../../services/cart.service';
// import { DataService} from '../../../services/data.service';
// import {Observable} from 'rxjs';




// @Component({
//   selector: 'app-products-list',
//   templateUrl: './products-list.component.html',
//   styleUrls: ['./products-list.component.scss']
// })
// export class ProductsListComponent {
//   products:Observable<Product[]> = [
    
//   ];

//   ngOnInit() {
//     this.products = this.getItems();
//   }
//   constructor(private prodService: ProductService, private cartService:CartService , private data:DataService) { }


//   clicked(product:any):void {
//     let productList: any[] = [];
//     const productListString = localStorage.getItem('productList');
//     this.cartService.loadProductListFromLocalStorage();

//     if (productListString) {
//       productList = JSON.parse(productListString);
//        }
//     // Append the clicked product to the list
//       productList.push(product);

//       // Save the updated list back to local storage
//       localStorage.setItem('productList', JSON.stringify(productList));
      
      
//      }


// }
