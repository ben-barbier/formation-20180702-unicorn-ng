import {Unicorn} from '../../models/unicorn.model';
import {REMOVE_UNICORN_SUCCESS, RemoveUnicornSuccess, UPDATE_UNICORN_SUCCESS, UpdateUnicornSuccess} from '../actions/unicorn.actions';

export function unicornsReducer(unicorns: Unicorn[] = [], action: RemoveUnicornSuccess | UpdateUnicornSuccess) {

    console.log(action.type, unicorns);

    switch (action.type) {
        case REMOVE_UNICORN_SUCCESS:
            return unicorns.concat(action.unicorn);
        case UPDATE_UNICORN_SUCCESS:
            return unicorns.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        default:
            return unicorns;
    }
}
