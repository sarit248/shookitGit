import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { DeliveryMockService } from '../../services/delivery-mock.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public allOrders: Order[];


    constructor(private deliveryMockService: DeliveryMockService) { }

    ngOnInit() {
        this.deliveryMockService.getAllOrders().subscribe((order) => {
            this.allOrders = order;

            console.log(this.allOrders);
        });
    }
}





