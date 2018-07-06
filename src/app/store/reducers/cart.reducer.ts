import {Unicorn} from '../../models/unicorn.model';
import {ADD_UNICORN_TO_CART, AddUnicornToCart, REMOVE_UNICORN_FROM_CART, RemoveUnicornToCart} from '../actions/cart.actions';
import {REMOVE_UNICORN, RemoveUnicorn, UPDATE_UNICORN, UpdateUnicorn} from '../actions/unicorn.actions';

export function cartReducer(cart: Unicorn[] = [], action: AddUnicornToCart | RemoveUnicornToCart | RemoveUnicorn | UpdateUnicorn) {

    console.log(action.type, cart);

    switch (action.type) {
        case ADD_UNICORN_TO_CART:
            return cart.concat(action.unicorn);
        case REMOVE_UNICORN_FROM_CART:
        case REMOVE_UNICORN:
            return cart.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        case UPDATE_UNICORN:
            // TODO:
        default:
            return cart;
    }
}
