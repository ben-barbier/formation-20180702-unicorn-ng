import {Action} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const REMOVE_UNICORN = '[Unicorns] REMOVE_UNICORN';
export const UPDATE_UNICORN = '[Unicorns] UPDATE_UNICORN';

export class RemoveUnicorn implements Action {
    readonly type = REMOVE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class UpdateUnicorn implements Action {
    readonly type = UPDATE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
