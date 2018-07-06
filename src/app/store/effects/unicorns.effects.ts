import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {UPDATE_UNICORN, UpdateUnicorn} from '../actions/unicorn.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UnicornService} from '../../shared/services/unicorn.service';
import {Unicorn} from '../../models/unicorn.model';

@Injectable()
export class UnicornsEffects {
    updateUnicorn: Observable<Action> = this.actions.pipe(
        ofType('UPDATE_UNICORN'),
        mergeMap((action: UpdateUnicorn) =>
            this.unicornService.update(action.unicorn).pipe(
                map((unicorn: Unicorn) => {
                    debugger;
                    return ({type: 'UPDATE_UNICORN_SUCCESS', payload: unicorn})
                }),
                catchError(() => of({ type: 'UPDATE_UNICORN_FAILED' }))
            )
        )
    );

    constructor(private actions: Actions,
                private unicornService: UnicornService) {
    }
}
