import { ConnectionService } from './connection.service';
import { AuthService } from './auth.service';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService, ConnectionService
    ]
})
export class ModelModule { }
