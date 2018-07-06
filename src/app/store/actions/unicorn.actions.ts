import {Action} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const LOAD_UNICORNS = '[Unicorns] LOAD_UNICORNS';
export const REMOVE_UNICORN = '[Unicorns] REMOVE_UNICORN';
export const REMOVE_UNICORN_SUCCESS = '[Unicorns] REMOVE_UNICORN_SUCCESS';
export const REMOVE_UNICORN_FAILED = '[Unicorns] REMOVE_UNICORN_FAILED';
export const UPDATE_UNICORN = '[Unicorns] UPDATE_UNICORN';
export const UPDATE_UNICORN_SUCCESS = '[Unicorns] UPDATE_UNICORN_SUCCESS';
export const UPDATE_UNICORN_FAILED = '[Unicorns] UPDATE_UNICORN_FAILED';

export class LoadUnicorn implements Action {
    readonly type = LOAD_UNICORNS;
    constructor(public unicorns: Unicorn[]) { }
}
export class RemoveUnicorn implements Action {
    readonly type = REMOVE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class RemoveUnicornSuccess implements Action {
    readonly type = REMOVE_UNICORN_SUCCESS;
    constructor(public unicorn: Unicorn) { }
}
export class RemoveUnicornFailed implements Action {
    readonly type = REMOVE_UNICORN_FAILED;
    constructor(public unicorn: Unicorn) { }
}
export class UpdateUnicorn implements Action {
    readonly type = UPDATE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class UpdateUnicornSuccess implements Action {
    readonly type = UPDATE_UNICORN_SUCCESS;
    constructor(public unicorn: Unicorn) { }
}
export class UpdateUnicornFailed implements Action {
    readonly type = UPDATE_UNICORN_FAILED;
    constructor(public unicorn: Unicorn) { }
}
