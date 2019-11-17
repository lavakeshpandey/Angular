import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
    includeShipped = false;

    constructor(private repositroy: OrderRepository) { }

    getOders(): Order[] {
        return this.repositroy.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }
    markShipped(order: Order) {
        order.shipped = true;
        this.repositroy.updateOrder(order);
    }
    delete(id: number) {
        this.repositroy.deleteOrder(id);
    }
}
