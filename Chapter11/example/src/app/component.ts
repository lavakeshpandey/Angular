import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
    selector: 'app-product',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();

    getClasses(key: number): string {
        const product = this.model.getProduct(key);
        return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }

    getClassMap(key: number): Object {
        const product = this.model.getProduct(key);
        return {
            'text-center bg-danger': product.name == 'Kayak',
            'bg-info': product.price < 50
        };
    }
}
