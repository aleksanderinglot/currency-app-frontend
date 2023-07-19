import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRequests();
  }

  fetchRequests() {
    this.http.get<any[]>('http://localhost:8080/currencies/requests')
      .subscribe(
        (response) => {
          this.requests = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
