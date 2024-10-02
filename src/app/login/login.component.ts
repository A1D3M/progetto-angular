import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.get<any[]>(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
      .subscribe(users => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('token', user.token);
          this.router.navigate(['/client-management']); 
        } else {
          this.errorMessage = 'Invalid login';
        }
      }, error => {
        this.errorMessage = 'Login failed';
      });
  }
}
