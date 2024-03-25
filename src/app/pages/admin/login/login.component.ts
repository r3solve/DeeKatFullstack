import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthenticationService, private router: Router) {}


  login(email: string, password: string) {
      this.authService.signInWithEmailAndPassword(email, password)
        .then(() => {
          // Handle successful login
          alert("Welcome")
          this.router.navigate(['/admin/home']);
        })
        .catch((error) => {
          alert('Can\'t login')
        });
    console.log(email, password);
 

}

}