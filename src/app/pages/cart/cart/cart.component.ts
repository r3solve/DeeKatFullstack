import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product'
import { CartService } from '../../../services/cart.service'
import {environment} from '../../../../environments/environment'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: Product[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit() {

    this.productList = this.cartService.loadProductListFromLocalStorage();
    
  }

   removeItem(item: Product):void {
        this.productList = this.productList.filter(prod => prod !== item);
        localStorage.setItem('productList', JSON.stringify(this.productList));
    }


  totalPrice(): number {
    let sum: number = 0;
    this.productList.forEach((each) => {
        sum += Number(each.price); // Convert each.price to a number before adding
    });
    return sum;

  }

  order():void {
    
    alert(this.productList[0].name);
  }


    
    
}

