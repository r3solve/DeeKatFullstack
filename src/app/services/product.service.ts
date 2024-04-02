import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product'


const products: Product[] = [

];

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getAll():Product[] {
    return products;
  }
}
