import {Unicorn} from '../../models/unicorn.model';
import {ADD_UNICORN_TO_CART, AddUnicornToCart, REMOVE_UNICORN_FROM_CART, RemoveUnicornToCart} from '../actions/cart.actions';
import {REMOVE_UNICORN, RemoveUnicorn, UPDATE_UNICORN, UpdateUnicorn} from '../actions/unicorn.actions';

export function unicornsReducer(unicorns: Unicorn[] = [], action: RemoveUnicorn | UpdateUnicorn) {

    console.log(action.type, unicorns);

    switch (action.type) {
        case REMOVE_UNICORN:
            return unicorns.concat(action.unicorn);
        case UPDATE_UNICORN:
            return unicorns.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        default:
            return unicorns;
    }
}
