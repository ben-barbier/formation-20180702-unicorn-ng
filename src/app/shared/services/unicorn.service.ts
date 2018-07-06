import {Injectable} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {flatMap, map, mergeMap, toArray} from 'rxjs/operators';
import {Capacity} from '../../models/capacity.model';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    constructor(private http: HttpClient) {
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

    public update(unicorn: Unicorn): Observable<Unicorn> {
        return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicorn);
    }

    public delete(unicorn: Unicorn): Observable<any> {
        return this.http.delete(`http://localhost:3000/unicorns/${unicorn.id}`);
    }

    public get(unicornId: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://localhost:3000/unicorns/${unicornId}`);
    }
}
