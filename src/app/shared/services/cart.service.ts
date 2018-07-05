import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';
import {AppState} from '../../store/app.state';
import {AddUnicornToCart, RemoveUnicornToCart} from '../../store/actions/cart.actions';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart: Observable<Unicorn[]> = this.store.pipe(select('cart'));

    constructor(private store: Store<AppState>) {
    }

    public addUnicornToCart(unicorn: Unicorn) {
        this.store.dispatch(new AddUnicornToCart(unicorn));
    }

    public removeUnicornFromCart(unicornToRemove: Unicorn) {
        this.store.dispatch(new RemoveUnicornToCart(unicornToRemove));
    }

}
