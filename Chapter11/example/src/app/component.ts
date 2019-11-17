import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
    selector: 'app-product',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
}
