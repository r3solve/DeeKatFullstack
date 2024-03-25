import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from './pages/cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBdtwc5l7_xmJ5xwHzRZSyqct56n9bv4S8",

  authDomain: "deekart-f5c19.firebaseapp.com",

  projectId: "deekart-f5c19",

  storageBucket: "deekart-f5c19.appspot.com",

  messagingSenderId: "569683536019",

  appId: "1:569683536019:web:7804a8e76c2997cfdfc566"

};



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
