import {Component} from '@angular/core';
import {Unicorn} from '../models/unicorn.model';
import {Observable} from 'rxjs';
import {CartService} from '../shared/services/cart.service';

@Component({
    selector: 'uni-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public cart: Observable<Unicorn[]> = this.cartService.cart;

    constructor(private cartService: CartService) {
    }

}
