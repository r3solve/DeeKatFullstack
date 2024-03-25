import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    cartItems!:number;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService.cartItemsSubject.subscribe((count: number) => {
            this.cartItems = count;
        });
    }
}
