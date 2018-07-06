import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornService} from '../../shared/services/unicorn.service';
import {map, pluck, tap} from 'rxjs/operators';
import {Unicorn} from '../../models/unicorn.model';

@Injectable({
    providedIn: 'root'
})
export class AgeGuard implements CanActivate {

    constructor(private unicornService: UnicornService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.unicornService.get(next.params['id']).pipe(
            pluck('birthyear'),
            map((birthyear: number) => birthyear % 2 === 0),
            tap((canActivate: boolean) => !canActivate && this.router.navigate(['']))
        );
    }
}
