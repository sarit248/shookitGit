import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { DeliveryMockService } from '../../services/delivery-mock.service';

@Component({
    selector: 'app-future-orders',
    templateUrl: './future-orders.component.html',
    styleUrls: ['./future-orders.component.css']
})
export class FutureOrdersComponent implements OnInit {

    singleOrder: Order;


    constructor(private activatedRoute: ActivatedRoute, private deliveryMockService: DeliveryMockService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params["orderId"]; 

        this.deliveryMockService.getAllOrders().subscribe((orders) => {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].id === id) {
                    this.singleOrder = orders[i];
                    break;
                }
            }
        });
    }
}
