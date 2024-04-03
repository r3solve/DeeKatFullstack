import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product'
import { CartService } from '../../../services/cart.service'
import {environment} from '../../../../environments/environment'
import { HubtelService } from '../../../services/hubtel.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: Product[] = []; 

  constructor(private cartService: CartService, private hubtel: HubtelService, private router: Router) {}

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

  parseFloat(num:any) {
    return Number(num)
  }


  payNow() {
    const requestData = {
      amount: 3,
      title: "Deekat",
      description: "Confirm order",
      clientReference: "Customer",
      callbackUrl: "http://www.google.com",
      cancellationUrl: "http://www.google.com",
      returnUrl: "http://www.google.com",
      // logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZak43s1U31s8sGsjCMoPYapYSm2TNsLULNooaIP_mxw&s"
    };

    this.hubtel.sendMoney(requestData)
      .subscribe((response:any) => {
        alert(response.data.paylinkUrl);
        // Handle the response here
        // this.router.navigate([response.data.paylinkUrl])
      }, (error:any) => {
        console.log(error);
        // Handle the error here
      });
  }
 

    
    
}

