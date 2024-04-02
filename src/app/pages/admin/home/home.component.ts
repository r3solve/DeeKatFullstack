import { Product } from './../../../interfaces/product';
import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Observable} from 'rxjs';
import {DataService} from '../../../services/data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  path: any;
  product: Product = {
    uuid:'',
    name: '',
    price: 0,
    description: '',
    category: '',
    stock: 0,
    imageUrl: '',
    isPopular: false,
    imageAlt1:'',
    imageAlt2: '',
    imageAlt3: '',
  };

  constructor(private data: DataService,private authService: AuthenticationService, private router: Router, private storage: AngularFireStorage, private db: AngularFireDatabase) {}
  
  products: Observable<Product[]> = new Observable<Product[]>(undefined);
  

   ngOnInit() {
    this.products = this.data.getItems();
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['/admin']);
  }

  photoselected(event: any) {
    this.path = event.target.files[0];
  }

  uploadImages(name:any, price:any, des:any, stock:any, category:any ,size:any, color:any) {
    if (!this.path) {
      alert('No file selected for upload.');
      return;
    }

    const filePath = `store/products/${this.path.name}`;
    const fileRef = this.storage.ref(filePath);
    
    this.storage.upload(filePath, this.path).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          console.log('File available at: ', url);
          this.product.imageUrl = url;
          this.product.name = name;
          this.product.price = price;
          this.product.description = des;
          this.product.category = 'fashion'
          this.product.uuid = crypto.randomUUID();
          this.product.category = category;
          this.product.stock  = stock;
          this.saveProduct(); 
          
        });
      })
    ).subscribe();

    
  }

  saveProduct() {
    this.db.list('products').push(this.product)
      .then(() => {
        alert('Product added successfully!');
        
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
        alert('Error adding product. Please try again.');
      });
      
  }


  
}
