import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Observable<Product[]> | undefined;
  private currentRoute: string | null = null;
  filteredProducts!:Product;
  colors: any| undefined;

  constructor(private router:Router ,private prodService: ProductService, private cartService: CartService, private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.data.getItems();
    this.cartService.loadProductListFromLocalStorage();
    this.route.paramMap.subscribe(params => {
      this.currentRoute = params.get("name") || null; 
      this.filterByRoute();
    });

    // if (!this.filteredProducts) {
    //   this.router.navigate(["/"]);
    // }


    
  }

  private filterByRoute() {
    this.products?.subscribe((res: Product[]) => {
      if (res) {
        this.filteredProducts = res.filter(product => product.name === this.currentRoute)[0];
        this.colors = this.filteredProducts.colors

      }
    });

  
  }

  changeColor(OptionValue:any) {
    
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
