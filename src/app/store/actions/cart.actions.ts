import {Action} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const ADD_UNICORN_TO_CART = '[Cart] ADD_UNICORN_TO_CART';
export const REMOVE_UNICORN_FROM_CART = '[Cart] REMOVE_UNICORN_FROM_CART';

export class AddUnicornToCart implements Action {
    readonly type = ADD_UNICORN_TO_CART;
    constructor(public unicorn: Unicorn) { }
}
export class RemoveUnicornToCart implements Action {
    readonly type = REMOVE_UNICORN_FROM_CART;
    constructor(public unicorn: Unicorn) { }
}
