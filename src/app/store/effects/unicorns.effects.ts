import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {UPDATE_UNICORN, UpdateUnicorn, UpdateUnicornFailed, UpdateUnicornSuccess} from '../actions/unicorn.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Unicorn} from '../../models/unicorn.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UnicornsEffects {

    @Effect()
    updateUnicorn: Observable<Action> = this.actions.pipe(
        ofType(UPDATE_UNICORN),
        mergeMap((action: UpdateUnicorn) =>
            this.http.put<Unicorn>(`http://localhost:3000/unicorns/${action.unicorn.id}`, action.unicorn).pipe(
                map((updatedUnicorn: Unicorn) => new UpdateUnicornSuccess(updatedUnicorn)),
                catchError(() => of(new UpdateUnicornFailed(action.unicorn)))
            )
        )
    );

    constructor(private actions: Actions, private http: HttpClient) {
    }

}
