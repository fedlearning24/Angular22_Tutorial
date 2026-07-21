import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router);

  onLogin() {
    // API call to validate user
    this.router.navigate(['/pages/home']);
  }

  onRegister(){
    this.router.navigateByUrl('/pages/register');
  }
}
