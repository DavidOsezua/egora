import { Component, inject, OnInit } from '@angular/core';
import { Login } from '../../models/interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: Login = {
    email: '',
    password: '',
  };

  router = inject(Router);

  ngOnInit(): void {}

  onLogin(): void {
    if (
      this.loginForm.email === 'admin@admin.com' &&
      this.loginForm.password === '12345678'
    ) {
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('user', JSON.stringify(this.loginForm));
    } else {
      alert('invalid Email and Password');
    }
  }
}
