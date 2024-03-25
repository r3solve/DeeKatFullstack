import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: AngularFireAuth) {}

  signInWithEmailAndPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  } 
}

