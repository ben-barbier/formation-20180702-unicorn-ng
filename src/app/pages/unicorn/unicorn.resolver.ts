import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Unicorn} from '../../models/unicorn.model';
import {UnicornService} from '../../shared/services/unicorn.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnicornResolver implements Resolve<Unicorn> {

    constructor(private unicornService: UnicornService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Unicorn> {
        return this.unicornService.get(route.params['id']);
    }

}
