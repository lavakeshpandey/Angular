import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule { }
