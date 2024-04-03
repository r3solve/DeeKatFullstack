import { Component, OnInit } from '@angular/core';
import { Product } from './../../../interfaces/product';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../../../services/data.service'
import { AuthenticationService } from '../../../services/auth.service';






@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{
  path: any;
  alturls:any = [];
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
    sizes:'',
    colors:'',
  };

  constructor(private authService: AuthenticationService, private data: DataService ,private fireStorage: AngularFireStorage, private database: AngularFireDatabase, private router: Router){}
  products: Observable<Product[]> = new Observable<Product[]>(undefined);
  

   ngOnInit() {
    this.products = this.data.getItems();
  }

  async onUpload($event:any) {
    const file = $event.target.files[0];
    if (file) {
      const path = `products-images/${file.name}`
      const uploadedFile = await this.fireStorage.upload(path, file);
      const fileRef = this.fireStorage.ref(path);
      fileRef.getDownloadURL().subscribe((url:any) => {
          this.alturls.push(url);
    })

  }
}

  saveProduct(name:any ,des:any, price:any, category:any, stock:any, size:any, color:any) {
    this.product.imageUrl = this.alturls[0];
    this.product.imageAlt1 = this.alturls[1];
    this.product.imageAlt2 = this.alturls[2];
    this.product.imageAlt3 = this.alturls[3];
    this.product.name = name;
    this.product.price = price;
    this.product.description = des;
    this.product.category = category;
    this.product.uuid = crypto.randomUUID();
    this.product.category = category;
    this.product.stock  = stock;
    this.product.sizes = size;
    this.product.colors = color;

    if (this.product.name === "" || this.product.sizes === "" || this.product.colors === "") {
      alert("Some Fields are empty");
      return;
    }

    this.database.list('products').push(this.product)
      .then(() => {
        alert('Product added successfully!');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
        alert('Error adding product. Please try again.');
      })
      .finally(() => {
        this.alturls = [];
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([this.router.url]);
      });
    });
}

deleteItem(itemId: string) {
  this.database.object(`products/${itemId}`).remove()
    .then(() => alert('Item deleted successfully'))
    .catch(error => alert('Error deleting item: ' +  error));
}

logout() {
    this.authService.signOut();
    this.router.navigate(['/admin']);
  }


}
