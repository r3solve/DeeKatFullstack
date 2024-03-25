import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product'
import { CartService } from '../../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: Product[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.loadProductListFromLocalStorage();
  }

   removeItem(item: Product) {
        this.productList = this.productList.filter(prod => prod !== item);
        localStorage.setItem('productList', JSON.stringify(this.productList));
    }

    
    
}

