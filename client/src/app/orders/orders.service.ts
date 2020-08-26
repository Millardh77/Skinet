import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IOrder, IOrderItem  } from '../shared/models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;
  private ordersSource = new BehaviorSubject<IOrder>(null);
  order$ = this.ordersSource.asObservable();

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }

  getOrder(id: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
