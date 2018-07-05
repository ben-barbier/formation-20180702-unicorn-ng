import {Injectable} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {flatMap, map, toArray} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
            flatMap(e => e),
            map((unicorn: Unicorn) => Object.assign(unicorn, {weight: unicorn.weight * 10})),
            toArray()
        );
    }

}
