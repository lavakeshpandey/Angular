import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
//import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) { }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(order => this.orders = this.orders);
    }
    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
        });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id));
        });
    }

}
