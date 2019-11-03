import { CheckOutComponent } from './checkOut.component';
import { CartDetailComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './counter.directive';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckOutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckOutComponent]
})
export class StoreModule { }
