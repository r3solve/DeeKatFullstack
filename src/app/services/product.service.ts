import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product'


const products: Product[] = [
    {
        id: 1,
        name: "Nike Air Max 90",
        price: 120,
        description: "Iconic Nike sneakers known for comfort and style.",
        category: "Sneakers",
        stock: 50,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 180,
        description: "Popular Adidas running shoes with responsive cushioning.",
        category: "Sneakers",
        stock: 30,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
        id: 3,
        name: "Jordan Retro 1",
        price: 160,
        description: "Classic Jordan sneakers with a timeless design.",
        category: "Sneakers",
        stock: 20,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
        id: 4,
        name: "New Balance 990v5",
        price: 175,
        description: "Comfortable and supportive New Balance sneakers.",
        category: "Sneakers",
        stock: 40,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
        id: 5,
        name: "Puma Suede Classic",
        price: 65,
        description: "Timeless Puma sneakers with a suede upper.",
        category: "Sneakers",
        stock: 15,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
        id: 6,
        name: "Converse Chuck Taylor All Star",
        price: 50,
        description: "Iconic Converse sneakers suitable for everyday wear.",
        category: "Sneakers",
        stock: 25,
        imageUrl: "https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg"
    },
    {
       id :7, 
       name : 'Reebok Classic Leather',
       price : 75, 
       description : 'Timeless Reebok sneakers with a leather upper.',
       category : 'Sneakers',
       stock : 35, 
       imageUrl : 'https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg'
   },
   {
       id :8, 
       name : 'Vans Old Skool',
       price : 60, 
       description : 'Classic Vans sneakers with a signature side stripe.',
       category : 'Sneakers',
       stock : 10, 
       imageUrl : 'https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg'
   },
   {
       id :9, 
       name : 'Asics Gel-Lyte III',
       price : 110, 
       description : 'Comfortable Asics sneakers with GEL cushioning.',
       category : 'Sneakers',
       stock : 20, 
       imageUrl : 'https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg'
   },
   {
       id :10, 
       name : 'Saucony Jazz Original',
       price : 70, 
       description : 'Vintage-inspired Saucony sneakers with a retro look.',
       category : 'Sneakers',
       stock : 30, 
       imageUrl : 'https://st.depositphotos.com/1012291/3599/i/950/depositphotos_35991789-stock-illustration-air-jordan-by-nike.jpg'
   }
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
