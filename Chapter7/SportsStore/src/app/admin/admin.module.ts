import { OrderTableComponent } from './orderTable.component';
import { ProductTableComponent } from './productTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { AuthService } from './../model/auth.service';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    {
        path: 'main', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: 'products/:mode/:id', component: ProductEditorComponent },
            { path: 'products/:mode', component: ProductEditorComponent },
            { path: 'products', component: ProductTableComponent },
            { path: 'orders', component: OrderTableComponent },
            { path: '**', redirectTo: 'products' },
        ]
    },
    { path: '**', component: AuthComponent }
]);
@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthService],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule { }
