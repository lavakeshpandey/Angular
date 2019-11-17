import { ConnectionService } from './../model/connection.service';
import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
    // template: `<div><h3 class="bg-info p-1 text-white">Cart Detail Component</h3></div>`,
    templateUrl: 'cartDetail.component.html'
})
export class CartDetailComponent {
    public connected = true;

    constructor(public cart: Cart, private connection: ConnectionService) {
        this.connected = this.connection.connected;
        connection.Changes.subscribe((state) => this.connected = state);
    }
}
