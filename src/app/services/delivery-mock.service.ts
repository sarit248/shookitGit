import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
    providedIn: 'root'
})
export class DeliveryMockService {

    constructor(private httpClient: HttpClient) { }

    public getAllOrders(): Observable<Order[]> {
        return this.httpClient.get<Order[]>("/assets/json/deliveryMock.json");
    }
}




