import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent {
  currencyCode: string = '';
  userName: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const requestData = {
      currency: this.currencyCode,
      name: this.userName
    };

    this.http.post('http://localhost:8080/currencies/get-current-currency-value-command', requestData)
      .subscribe(
        (response) => {
          this.router.navigate(['/requests']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}