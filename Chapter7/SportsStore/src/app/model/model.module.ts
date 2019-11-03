import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        {provide: StaticDataSource, useClass: RestDataSource}
    ]
})
export class ModelModule { }
