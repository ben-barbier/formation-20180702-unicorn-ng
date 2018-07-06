import {Injectable} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {flatMap, map, mergeMap, toArray} from 'rxjs/operators';
import {Capacity} from '../../models/capacity.model';
import {AppState} from '../../store/app.state';
import {select, Store} from '@ngrx/store';
import {UpdateUnicorn} from '../../store/actions/unicorn.actions';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    public unicorns: Observable<Unicorn[]> = this.store.pipe(select('unicorns'));

    constructor(private http: HttpClient,
                private store: Store<AppState>) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> =>
                from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> =>
                        this.http.get<Capacity>(`http://localhost:3000/capacities/${capacityId}`)),
                    toArray(),
                    map((capacities: Capacity[]): Unicorn => {
                        unicorn.capacitiesObj = capacities;
                        return unicorn;
                    })
                )
            ),
            toArray()
        );
    }

    public delete(unicorn: Unicorn): Observable<any> {
        return this.http.delete(`http://localhost:3000/unicorns/${unicorn.id}`);
    }

    public get(unicornId: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://localhost:3000/unicorns/${unicornId}`);
    }

    public update(unicorn: Unicorn): void {
        this.store.dispatch(new UpdateUnicorn(unicorn));
    }

}
