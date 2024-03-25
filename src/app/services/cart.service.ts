import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsSubject: Subject<number> = new Subject<number>();

  constructor() {}

  loadProductListFromLocalStorage() {
    const productListString = localStorage.getItem('productList');
    if (productListString) {
      const productList = JSON.parse(productListString);
      this.cartItemsSubject.next(productList.length); // Emit cart items count
      return productList;
    }
  }
}
