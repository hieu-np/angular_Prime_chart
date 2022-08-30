import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/models/customer.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiCustomer } from 'src/app/env/database.env';

@Injectable()
export class CustomerService {
  API_URL:string = apiCustomer.apiUrl
  constructor(private http: HttpClient) {}

  getCustomerAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL)
  }
}
