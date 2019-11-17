import { StoreFirstGuard } from './storeFirst.guard';
import { CheckOutComponent } from './store/checkOut.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: 'checkout', component: CheckOutComponent, canActivate: [StoreFirstGuard] },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [StoreFirstGuard] },
      { path: '**', redirectTo: '/store' }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
