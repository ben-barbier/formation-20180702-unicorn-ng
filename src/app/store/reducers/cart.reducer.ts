import {Unicorn} from '../../models/unicorn.model';
import {ADD_UNICORN_TO_CART, AddUnicornToCart, REMOVE_UNICORN_FROM_CART, RemoveUnicornToCart} from '../actions/cart.actions';

export function cartReducer(cart: Unicorn[] = [], action: AddUnicornToCart | RemoveUnicornToCart) {

    console.log(action.type, cart);

    switch (action.type) {
        case ADD_UNICORN_TO_CART:
            return cart.concat(action.unicorn);
        case REMOVE_UNICORN_FROM_CART:
            return cart.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        default:
            return cart;
    }
}
